import styled from 'styled-components';

const StyledBadge = styled.div`
  padding: 0.2rem 0.3rem;
  border: 1px solid ${(props) => props.theme.colors.border.secondary};
  margin: 0 0.3rem 0.3rem;
`;

const StyledUnknownCharacter = styled.em`
  font-style: italic;
`;

export { StyledBadge, StyledUnknownCharacter };
