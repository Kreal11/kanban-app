import styled from "styled-components";
import { colors } from "../../theme/colors";

export const HeaderWrapper = styled.header`
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 60px;
`;

export const HeaderForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 16px;
  background: ${colors.lightblue};
  color: ${colors.black};
`;

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 14px 22px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  background-color: ${colors.lightblue};
  color: ${colors.black};

  transition: background-color 0.4s ease-in-out, color 0.4s ease-in-out;

  &:hover {
    color: ${colors.white};
    background-color: ${colors.darkcyan};
  }
`;
