import styled from "styled-components";

export const Buttons = styled.div`
  display: flex;
  gap: 16px;
`;

export const Button = styled.button`
  height: 3em;
  padding-top: 0.25em;
  // https://fluid.style/type?min=2&max=3&min-bp=20&max-bp=55&unit=%22rem%22
  font-size: clamp(2rem, 1.429rem + 2.857vw, 3rem);
  font-family: "Special Elite", "Courier Prime", "Courier", serif;
`;

export const MainButton = styled(Button)`
  border-radius: 1em;
  background-color: #ae7e66;
  flex-grow: 1;
`;
