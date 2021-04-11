import { Colors } from "./types";

export const baseColors = {
  failure: "#b71540",
  primary: "#f6b93b",
  primaryBright: "#fad390",
  primaryDark: "#f6b93b",
  secondary: "#4a69bd",
  success: "#78e08f",
  warning: "#fa983a",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FFFBF6",
  backgroundDisabled: "#c4d1dd",
  contrast: "#1A1406",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#46557d",
  tertiary: "#EFF4F5",
  text: "#f6b93b",
  textDisabled: "#828b93",
  textSubtle: "#eaa86c",
  borderColor: "#98a3ac",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#4a69bd",
  background: "#150C00",
  menuBackground: "#1A0E00",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#1A1406",
  input: "#483f5a",
  inputSecondary: "#66578D",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#FFE5B9",
  textDisabled: "#666171",
  textSubtle: "#f8c291",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
