import styled from 'styled-components';

import { SIDEBAR_WIDTH_PX } from 'styles/theme/breakpoints';

const StyledShellContent = styled.div`
  height: auto;
  margin-left: ${SIDEBAR_WIDTH_PX}px;
  padding: 1rem 1.5rem;
  max-width: ${(props) => props.theme.breakpoints.m};
  width: 100%;

  @media screen and (max-width: 1214px) {
    z-index: 0;
    margin: 53px 0 0;
    padding: 0.5rem 1rem;
    max-width: none;
  }
`;

export default StyledShellContent;
