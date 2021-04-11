/* eslint-disable no-nested-ternary */
import React from "react";
import styled, { keyframes, DefaultTheme } from "styled-components";
import { MENU_ENTRY_HEIGHT } from "../config";

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  isPushed?: boolean;
  theme: DefaultTheme;
}

const rainbowAnimation = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`;

const LinkLabel = styled.div<{ isPushed: boolean, isActive: boolean }>`
  opacity: ${({isActive}) => isActive ? "1.0" : "0.5"};
  color: ${({ isActive ,isPushed, theme }) => (isPushed ? (isActive ? theme.colors.textSubtle : theme.colors.contrast) : "transparent")};
  transition: color 0.4s;
  flex-grow: 1;
`;

const MenuEntry = styled.div<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: ${({ secondary }) => (secondary ? "0 32px" : "0 16px")};
  font-size: ${({ secondary }) => (secondary ? "14px" : "16px")};
  border-radius: ${({secondary, isPushed}) => (secondary || !isPushed ? "0px" : "8px") };
  background-color: ${({ secondary, theme }) => (secondary ? theme.colors.background : "transparent")};
  color: ${({ isActive, theme }) => (isActive ? theme.colors.textSubtle : `${theme.colors.contrast}20`)};
  transition: all 0.3s ease-in-out;

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  svg {
    transition: all 0.3s;
    fill: ${({ theme, isActive }) => isActive ? theme.colors.textSubtle : `${theme.colors.contrast}20`};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
    box-shadow: ${({ theme, secondary }) => secondary ? "none" : theme.shadows.active};
  }

  // Safari fix
  flex-shrink: 0;

  &.rainbow {
    background-clip: text;
    animation: ${rainbowAnimation} 3s ease-in-out infinite;
    background: ${({ theme }) => theme.colors.gradients.bubblegum};
    background-size: 400% 100%;
  }
`;
MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
  role: "button",
};

const LinkLabelMemo = React.memo(LinkLabel, (prev, next) => prev.isPushed === next.isPushed);

export { MenuEntry, LinkLabelMemo as LinkLabel };
