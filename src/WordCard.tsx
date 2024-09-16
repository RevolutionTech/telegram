import * as React from "react";
import styled from "styled-components";
import range from "lodash/range";

import { WordLetter, WordLetterDisplayType } from "./WordLetter";
import { Word } from "./words";
import { MAX_NUM_LETTERS } from "./constants";

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  align-items: center;
  justify-content: center;
`;

const WordNum = styled.div`
  min-width: 2.25em;
  height: 2em;
  background-color: #ae7e66;
  border-radius: 50%;
  padding-top: 0.25em;
  // https://fluid.style/type?min=1.5&max=3.5&min-bp=20&max-bp=55&unit=%22rem%22
  font-size: clamp(1.5rem, 0.357rem + 5.714vw, 3.5rem);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Letters = styled.div`
  display: flex;
  align-items: center;
  // https://fluid.style/spacing?min=8&max=16&min-bp=320&max-bp=880&unit=%22px%22
  gap: clamp(8px, 3.429px + 1.429vw, 16px);
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
  <Row>
    <WordNum>{props.index}</WordNum>
    <Letters>
      {range(MAX_NUM_LETTERS).map((i) => (
        <WordLetter
          key={i}
          displayType={getDisplayType(props.word, i)}
          letter={props.word.letters[i] ?? null}
          index={i + 1}
        />
      ))}
    </Letters>
  </Row>
);
