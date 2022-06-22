import styled from 'styled-components';

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

export { StyledHome };
