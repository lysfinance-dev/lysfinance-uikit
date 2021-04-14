import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
    return (
        <Svg viewBox="0 0 512 512" {...props}>
            <path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M344 280l88-88M232 216l64 64M80 320l104-104' />
            <circle cx='456' cy='168' r='24' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' />
            <circle cx='320' cy='304' r='24' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' />
            <circle cx='208' cy='192' r='24' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' />
            <circle cx='56' cy='344' r='24' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' />
        </Svg>
    );
};

export default Icon;
