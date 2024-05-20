import styled from "styled-components";

export const AboutMeComponent = styled.div``

export const Title = styled.h1`
  font-size: 4.4rem;
  margin-bottom: 16px;
`

export const AboutContent = styled.p``

export const LinkButton = styled.a`
  display: inline-block;
  margin-top: 16px;
  padding: 16px 32px;
  font-size: 1.2rem;
  font-weight: 600;
  background: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: ${({ theme }) => `-webkit-linear-gradient(${theme.colors.lightPurple}, ${theme.colors.purple})`};
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => `-webkit-linear-gradient(${theme.colors.darkPurple}, ${theme.colors.purple})`};
  }
`
