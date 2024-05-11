import { FC } from "react";

import { SvgProps } from "./types";
import sprite from "/sprite.svg";

const Svg: FC<SvgProps> = ({ id }) => {
  return (
    <svg>
      <use xlinkHref={`${sprite}#${id}`}></use>
    </svg>
  );
};

export default Svg;
