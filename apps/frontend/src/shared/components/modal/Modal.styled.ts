import styled from "styled-components";
import { breakpoints } from "../../../styles/breakpoints";
import { colors } from "../../theme/colors";

const { tablet } = breakpoints;

export const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.modalBackdrop};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const ContentWrapper = styled.div`
  position: relative;
  background-color: ${colors.lightgray};
  border: 1px solid rgba(244, 244, 244, 0.3);
  overflow: hidden;
  border-radius: 20px;
  padding: 60px;
`;

export const StyledCloseButton = styled.button`
  border: none;
  padding: 5px;
  width: 18px;
  height: 18px;
  color: ${colors.black};
  background-color: transparent;
  font-size: 16px;

  position: absolute;

  top: 14px;
  right: 40px;
  &:hover {
    transform: scale(1.2);
  }

  @media screen and (min-width: ${tablet}) {
    width: 24px;
    height: 24px;
  }
`;
