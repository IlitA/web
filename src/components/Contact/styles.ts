import styled from "styled-components";

export const ContactComponent = styled.div`
  text-align: center;
`

export const ContactList = styled.ul`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 16px;
  padding: 0;
  list-style-type: none;

  @media screen and (min-width: 800px) {
    gap: 32px;
  }
`

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.2rem;

  > *:first-child {
    margin-right: 8px;
  }
`
