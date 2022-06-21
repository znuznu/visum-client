import styled from 'styled-components';

import { SIDEBAR_BREAKPOINT_PX, SIDEBAR_WIDTH_PX } from 'styles/theme/breakpoints';

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.main};
  box-shadow: 0 0 0 1px ${(props) => props.theme.colors.border.secondary};
  font-family: ${(props) => props.theme.fonts.main};
  width: ${SIDEBAR_WIDTH_PX}px;
  min-width: ${SIDEBAR_WIDTH_PX}px;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  top: 0;
  z-index: 1;

  @media screen and (max-width: ${SIDEBAR_BREAKPOINT_PX}px) {
    width: 100%;
    height: auto;
    box-shadow: unset;
    z-index: 1;
    bottom: unset;
  }
`;

export default StyledSidebar;
