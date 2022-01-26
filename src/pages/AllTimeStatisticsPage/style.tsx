import styled from 'styled-components';

const StyledAllTimeStatistics = styled.div`
  display: flex;
  flex-direction: column;

  max-width: ${({ theme }) => theme.breakpoints.m};
`;

export { StyledAllTimeStatistics };
