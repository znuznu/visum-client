import styled from 'styled-components';

const StyledShell = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.main};
  height: auto;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.m}) {
    flex-direction: column;
  }
`;

export default StyledShell;
