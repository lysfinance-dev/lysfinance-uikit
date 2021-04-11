import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 26 26" {...props}>
      <image height="26" href="https://raw.githubusercontent.com/lysfinance-dev/lysfinance-assets/main/lys/icon/lys_logoRound_md.png"/>
    </Svg>
  );
};

export default Icon;
