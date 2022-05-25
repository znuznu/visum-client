import styled from 'styled-components';
import { StyledScrollArea } from 'components/common/ScrollArea/style';

const StyledMenu = styled(StyledScrollArea)`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.main};
  padding-bottom: 1rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.m}) {
    border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
  }
`;

export default StyledMenu;
