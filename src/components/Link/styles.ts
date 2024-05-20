import styled from "styled-components";
import { Link } from 'react-router-dom';
import { textGradient } from "../../commonStyles";

export const LinkComponent = styled(Link)`
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    ${textGradient}
  }
`
