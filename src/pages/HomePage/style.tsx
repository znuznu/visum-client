import styled from 'styled-components';

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;

  max-width: ${({ theme }) => theme.breakpoints.m};
`;

export { StyledHome };
