import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledBadge = styled(Link)`
  padding: 0.2rem 0.3rem;
  border: 1px solid ${(props) => props.theme.colors.border.secondary};
  margin: 0 0.3rem 0.3rem;
  color: ${(props) => props.theme.colors.primary};

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const StyledUnknownCharacter = styled.em`
  font-style: italic;
`;

export { StyledBadge, StyledUnknownCharacter };
