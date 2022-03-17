import styled from 'styled-components';

const StyledDiary = styled.div`
  display: flex;
  margin: 1rem 0;
  flex-direction: column;

  max-width: ${({ theme }) => theme.breakpoints.m};
`;

export { StyledDiary };
