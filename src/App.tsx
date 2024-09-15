import React, { useMemo, useState, useEffect, useCallback } from "react";
import shuffle from "lodash/shuffle";
import slice from "lodash/slice";

import { Word, WORDS } from "./words";

const NUM_WORDS = 3;

const isDeckExhausted = (words: Word[], index: number) =>
  words.length - (index + NUM_WORDS) < NUM_WORDS;

const App = () => {
  const [words, setWords] = useState<Word[]>(WORDS);
  const [index, setIndex] = useState<number>(0);

  // Init word deck with shuffle
  useEffect(() => {
    setWords(shuffle(words));
  }, []);

  const currentWords = useMemo(
    () => slice(words, index, index + NUM_WORDS),

    [words, index]
  );
  const drawNewWords = useCallback(() => {
    if (isDeckExhausted(words, index)) {
      setWords(shuffle(words));
      setIndex(0);
    } else {
      setIndex(index + NUM_WORDS);
    }
  }, [words, index, setWords, setIndex]);

  return (
    <>
      {currentWords.map((word) => (
        <p>{word.letters.map((letter) => (letter == null ? "_" : letter))}</p>
      ))}
      <button onClick={drawNewWords}>Draw words</button>
    </>
  );
};

export default App;
