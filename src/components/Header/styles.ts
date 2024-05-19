import styled from "styled-components";

export const HeaderComponent = styled.header`
  display: flex;
  align-items: center;
  padding: 24px 40px;
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
    font-size: 1.4rem;
    width: 80px;
  }

  li:hover {
    text-decoration: underline;
  }

  li:not(:last-child) {
    margin-right: 40px;
  }

  a {
    text-decoration: none;
  }
`
