import styled from 'styled-components';

const StyledShellContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  // TODO change
  color: white;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sidebar}) {
    position: fixed;
    top: 58px;
    z-index: 0;
  }
`;

export default StyledShellContent;
