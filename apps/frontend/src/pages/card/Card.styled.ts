import styled from "styled-components";
import { colors } from "../../shared/theme/colors";

export const CardPageInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;

  h3 {
    margin-bottom: 20px;
  }

  p {
    text-align: justify;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    max-width: 80px;
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
  }
`;
