import * as React from "react";
import styled from "styled-components";

import Lines from "jsx:./assets/lines.svg";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
`;

const ColumnIndex = styled.div`
  // https://fluid.style/type?min=1&max=2&min-bp=20&max-bp=55&unit=%22rem%22
  font-size: clamp(1rem, 0.429rem + 2.857vw, 2rem);
`;

const LetterBox = styled.div`
  display: flex;
  justify-content: center;
  width: 1.1em;
  height: 1.1em;
  box-shadow: 0 0 0 0.03em black inset;
  // https://fluid.style/type?min=3&max=5&min-bp=20&max-bp=55&unit=%22rem%22
  font-size: clamp(3rem, 1.857rem + 5.714vw, 5rem);
`;

const Letter = styled.div`
  // https://fluid.style/spacing?min=12&max=16&min-bp=320&max-bp=880&unit=%22px%22
  padding-top: clamp(12px, 9.714px + 0.714vw, 16px);
`;

export enum WordLetterDisplayType {
  LETTER,
  BLANK,
  UNUSED,
}

interface WordLetterProps {
  displayType: WordLetterDisplayType;
  letter: string | null;
  index: number;
}

export const WordLetter = (props: WordLetterProps) => (
  <Column>
    <ColumnIndex>{props.index}</ColumnIndex>
    <LetterBox>
      {props.displayType === WordLetterDisplayType.LETTER && (
        <Letter>{props.letter}</Letter>
      )}
      {props.displayType === WordLetterDisplayType.UNUSED && <Lines />}
    </LetterBox>
  </Column>
);
