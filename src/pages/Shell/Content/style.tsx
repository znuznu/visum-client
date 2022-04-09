import styled from 'styled-components';

const StyledShellContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-left: 250px;
  padding: 0 1.5rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.m}) {
    z-index: 0;
    margin: 53px 0 0;
    padding: 0 1rem;
    width: auto;
  }
`;

export default StyledShellContent;
