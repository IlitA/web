import styled from "styled-components";

export const HeaderComponent = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  background-color: #00000088;

  nav {
    margin-left: 40px;
  }

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  li {
    width: 80px;
  }

  li:not(:last-child) {
    margin-right: 40px;
  }
`
