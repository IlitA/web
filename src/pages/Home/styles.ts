import styled from "styled-components";

export const HomePage = styled.div`
  > * {
    padding: 24px;
    background-color: #ffffff22;
    border-radius: 8px;

    &:not(:last-child) {
      margin-bottom: 24px;

      @media screen and (min-width: 800px) {
        margin-bottom: 40px;
      }
    }
  }
`
