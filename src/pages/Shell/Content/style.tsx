import styled from 'styled-components';

const StyledShellContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  color: white;
  padding-left: 250px;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.m}) {
    z-index: 0;
    padding: 53px 0 0;
  }
`;

export default StyledShellContent;
