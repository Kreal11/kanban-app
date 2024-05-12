import styled from "styled-components";
import { colors } from "../../../../shared/theme/colors";

export const FormWrapper = styled.div`
  text-align: center;

  h3 {
    margin-bottom: 20px;
  }

  button {
    width: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: none;
    padding: 8px;
    font-size: 20px;
    color: ${colors.black};
    background-color: ${colors.lightblue};
    transition: background-color 0.4s ease-in-out;

    &:hover {
      color: ${colors.white};
      background-color: ${colors.darkcyan};
    }
  }
`;

export const UpdateForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  input {
    padding: 10px 20px;
    border-radius: 8px;
    border: none;
    outline: none;
    font-size: 20px;
    color: ${colors.black};
    background-color: ${colors.lightblue};
  }

  textarea {
    box-sizing: border-box;
    padding: 10px 20px;
    width: 100%;
    border-radius: 8px;
    border: none;
    outline: none;
    font-size: 16px;
    font-family: "Arial";
    max-width: 283.5px;
    min-height: 100px;
    font-size: 20px;
    color: ${colors.black};
    background-color: ${colors.lightblue};
  }
`;
