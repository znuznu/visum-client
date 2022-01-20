import styled from 'styled-components';

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;

  max-width: ${({ theme }) => theme.breakpoints.m};
`;

export { StyledHome };
