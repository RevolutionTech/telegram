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
  font-size: 3em;
`;

const LetterBox = styled.div`
  display: flex;
  justify-content: center;
  width: 0.94em;
  height: 0.94em;
  box-shadow: 0 0 0 0.03em black inset;
  font-size: 10em;
`;

const Letter = styled.div`
  padding-top: 0.1em;
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
