import styled from "styled-components";

export const ContactComponent = styled.div`
  text-align: center;
`

export const ContactList = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  padding: 0;
  list-style-type: none;
`

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.2rem;

  > *:first-child {
    margin-right: 8px;
  }

  &:not(:last-child) {
    margin-right: 40px;
  }
`
