import { css } from "styled-components";

export const theme = {
  colors: {
    white: "#fff",
    gray: "#eee",
    black: "#222",
    darkPurple: "#440088",
    purple: "#8600FA",
    lightPurple: "#DBB0FF"
  },
  // fonts: {}
};

export const textGradient = css`
  background: ${({ theme }) => `-webkit-linear-gradient(${theme.colors.lightPurple}, ${theme.colors.purple})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
