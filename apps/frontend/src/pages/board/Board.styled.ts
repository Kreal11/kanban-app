import styled from "styled-components";
import { colors } from "../../shared/theme/colors";

type ToDo = {
  $toDo?: string;
};

export const HomeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-left: 0;
  margin-bottom: 40px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  color: ${colors.black};
  background-color: ${colors.lightblue};

  transition: background-color 0.4s ease-in-out, color 0.4s ease-in-out;

  &:hover {
    color: ${colors.white};
    background-color: ${colors.darkcyan};
  }
`;

export const BoardWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const CardListsWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
  gap: 50px;
`;

export const CardListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  position: relative;

  h2 {
    margin-bottom: 30px;
  }
`;

export const CardList = styled.ul<ToDo>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  background-color: ${colors.lightblue};
  width: 210px;
  border-radius: 8px;
  min-height: 700px;
  min-width: 230px;
  box-sizing: border-box;

  ${({ $toDo }) => $toDo === "toDo" && `padding-top: 202px;`}
`;

export const CardPlusImgWrapper = styled.div`
  cursor: pointer;
  background-color: white;
  border-radius: 8px;
  padding: 61px 80px;
  width: 50px;
  height: 50px;
  transition: background-color 0.4s ease-in-out;
  position: absolute;
  top: 76px;
  left: 11.5px;

  svg {
    fill: ${colors.black};
    width: 50px;
    height: 50px;
    transition: fill 0.4s ease-in-out;
  }

  &:hover {
    background-color: ${colors.darkcyan};
    svg {
      fill: ${colors.white};
    }
  }
`;
