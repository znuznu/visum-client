import styled from 'styled-components';

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.main};
  box-shadow: 0 0 0 1px ${(props) => props.theme.colors.border.secondary};
  font-size: ${(props) => props.theme.fontSizes.visum};
  font-family: ${(props) => props.theme.fonts.main};
  width: 250px;
  min-width: 250px;
  overflow: hidden;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sidebar}) {
    width: 100%;
    box-shadow: unset;
    z-index: 1;
  }
`;

export default StyledSidebar;
