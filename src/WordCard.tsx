import * as React from "react";
import styled from "styled-components";
import range from "lodash/range";

import { WordLetter, WordLetterDisplayType } from "./WordLetter";
import { Word } from "./words";
import { MAX_NUM_LETTERS } from "./constants";

const WordNum = styled.div`
  width: 2.25em;
  height: 2em;
  margin-right: 0.5em;
  background-color: #ae7e66;
  border-radius: 50%;
  padding-top: 0.2em;
  font-size: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Letters = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

const getDisplayType = (word: Word, index: number) => {
  if (index >= word.letters.length) {
    return WordLetterDisplayType.UNUSED;
  } else if (word.letters[index] == null) {
    return WordLetterDisplayType.BLANK;
  } else {
    return WordLetterDisplayType.LETTER;
  }
};

interface WordCardProps {
  word: Word;
  index: number;
}

export const WordCard = (props: WordCardProps) => (
  <Letters>
    <WordNum>{props.index}</WordNum>
    {range(MAX_NUM_LETTERS).map((i) => (
      <WordLetter
        key={i}
        displayType={getDisplayType(props.word, i)}
        letter={props.word.letters[i] ?? null}
        index={i + 1}
      />
    ))}
  </Letters>
);
