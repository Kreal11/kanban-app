import { FC } from "react";

import { SvgWrapperProps } from "./types";
import sprite from "/sprite.svg";

const SvgWrapper: FC<SvgWrapperProps> = ({ id }) => {
  return (
    <svg>
      <use xlinkHref={`${sprite}#${id}`}></use>
    </svg>
  );
};

export default SvgWrapper;
