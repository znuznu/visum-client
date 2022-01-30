import styled from 'styled-components';

const StyledDirector = styled.div`
  display: flex;
  margin: 1rem 0;

  max-width: ${({ theme }) => theme.breakpoints.s};
`;

export { StyledDirector };
