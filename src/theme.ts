import styled, { css } from "styled-components";

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

export const Text = styled.p<{ $size?: number; $hasGradient?: boolean }>`
  font-size: ${({ $size }) => $size ? `${$size}em` : "1em"};
  font-weight: ${({ $hasGradient }) => $hasGradient ? `800` : `400`};
  line-height: 1;

  ${({ $hasGradient }) => $hasGradient && textGradient};
`;
