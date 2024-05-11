import styled from "styled-components";
import { colors } from "../../../../shared/theme/colors";

export const CardLi = styled.li`
  padding: 6px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 160px;
  background-color: ${colors.white};
  color: ${colors.black};
`;

export const CardInfoWrapper = styled.div`
  text-align: start;
  padding: 4px;
  border-radius: 8px;
  border: 1px solid ${colors.black};
  cursor: pointer;
  transition: background-color 0.4s ease-in-out, color 0.4s ease-in-out;

  &:hover {
    background-color: ${colors.darkcyan};
    color: ${colors.white};
  }

  h3 {
    margin-bottom: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    max-height: 60px;
  }
`;
