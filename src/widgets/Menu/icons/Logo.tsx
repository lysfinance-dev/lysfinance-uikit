import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";
import { Text } from "../../../components/Text";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <>
      <Svg viewBox="0 0 32 32" {...props}>
        <image height="32" href="https://raw.githubusercontent.com/lysfinance-dev/lysfinance-assets/main/lys/icon/lys_128.png" />
      </Svg>
      <Text ml="8px" fontFamily="Parisienne, cursive" fontSize="28px" color="text">LysFinance</Text>
    </>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
