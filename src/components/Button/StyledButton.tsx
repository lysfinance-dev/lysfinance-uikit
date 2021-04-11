import styled, { DefaultTheme } from "styled-components";
import { space, layout, variant as vrt } from "styled-system";
import { scaleVariants, styleVariants } from "./theme";
import { BaseButtonProps, variants } from "./types";

interface ThemedButtonProps extends BaseButtonProps {
  theme: DefaultTheme;
}

const getDisabledStyles = ({ isLoading, theme }: ThemedButtonProps) => {
  if (isLoading === true) {
    return `
      &:disabled,
      &.pancake-button--disabled {
        cursor: not-allowed;
      }
    `;
  }

  return `
    &:disabled,
    &.pancake-button--disabled {
      background-color: ${theme.colors.backgroundDisabled};
      border-color: ${theme.colors.backgroundDisabled};
      box-shadow: none;
      color: ${theme.colors.textDisabled};
      cursor: not-allowed;
    }
  `;
};

/**
 * This is to get around an issue where if you use a Link component
 * React will throw a invalid DOM attribute error
 * @see https://github.com/styled-components/styled-components/issues/135
 */
interface TransientButtonProps extends ThemedButtonProps {
  $isLoading?: boolean;
}

const getThemeColor = ({ theme, variant = variants.PRIMARY }: ThemedButtonProps, bright = false) => {
  switch (variant) {
    case variants.PRIMARY:
      return bright ? theme.colors.primaryBright : theme.colors.primary;
    case variants.SECONDARY:
      return theme.colors.secondary;
    case variants.DANGER:
      return theme.colors.failure;
    case variants.SUCCESS:
      return theme.colors.success;
    case variants.SUBTLE:
      return theme.colors.textSubtle;
    case variants.TERTIARY:
      return theme.colors.tertiary;
    case variants.TEXT:
      return theme.colors.text;
    default:
      return theme.colors.secondary;
  }
};

const getOpacity = ({ $isLoading = false }: TransientButtonProps) => {
  return $isLoading ? ".5" : "1";
};

const StyledButton = styled.button<BaseButtonProps>`
  align-items: center;
  background-position: center;
  border: 0;
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.1), 0 3px 6px rgba(0,0,0,0.16);
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  justify-content: center;
  letter-spacing: 0.03em;
  line-height: 1;
  opacity: ${getOpacity};
  outline: 0;
  transition: opacity 0.3s, background 0.8s;

  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
    opacity: 0.65;
    background: ${getThemeColor} radial-gradient(circle, transparent 1%, ${({theme, variant})=>getThemeColor({theme, variant}, true)} 1%) center/15000% !important;
  }

  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {
    opacity: 0.85;
    background-color: ${getThemeColor};
    background-size: 100%;
    transition: opacity 0.3s, background 0s;
  }

  ${getDisabledStyles}
  ${vrt({
  prop: "scale",
  variants: scaleVariants,
})}
  ${vrt({
  variants: styleVariants,
})}
  ${layout}
  ${space}
`;

export default StyledButton;
