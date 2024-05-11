import styled from "styled-components";
import { colors } from "../../../../shared/theme/colors";

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 14px;

  button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.lightblue};
    gap: 6px;
    border-radius: 8px;
    border: none;
    padding: 8px;
    transition: background-color 0.4s ease-in-out;

    &:hover {
      color: ${colors.white};
      background-color: ${colors.darkcyan};
      svg {
        fill: white;
      }
    }
  }

  svg {
    fill: black;
    width: 20px;
    height: 20px;
    transition: fill 0.4s ease-in-out;
  }
`;

export const BoardLi = styled.li`
  box-sizing: border-box;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  background-color: ${colors.lightcoral};
  height: 250px;
  max-width: 200px;
  overflow: auto;

  p {
    white-space: pre-wrap;
    word-wrap: break-word;
  }
`;

export const BoardInfoWrapper = styled.div`
  padding: 6px;

  div {
    padding: 6px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    cursor: pointer;
    background-color: ${colors.lightblue};
    border-radius: 8px;
    transition: background-color 0.4s ease-in-out, color 0.4s ease-in-out;
    margin-bottom: 14px;

    &:hover {
      color: ${colors.white};
      background-color: ${colors.darkcyan};
    }
  }
`;
