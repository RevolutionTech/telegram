import React, { useMemo, useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import shuffle from "lodash/shuffle";
import slice from "lodash/slice";

import { NUM_WORDS } from "./constants";
import { WordCard } from "./WordCard";
import { Word, WORDS } from "./words";

const Offering = styled.div`
  height: 100%;
  margin: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 16px;
`;

const Button = styled.button`
  height: 3em;
  padding-top: 0.25em;
  border-radius: 1em;
  background-color: #ae7e66;
  // https://fluid.style/type?min=2&max=3&min-bp=20&max-bp=55&unit=%22rem%22
  font-size: clamp(2rem, 1.429rem + 2.857vw, 3rem);
  font-family: "Special Elite", "Courier Prime", "Courier", serif;
`;

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
    <Offering>
      {currentWords.map((word, i) => (
        <WordCard key={i} word={word} index={i + 1} />
      ))}
      <Button onClick={drawNewWords}>Draw word fragments</Button>
    </Offering>
  );
};

export default App;
