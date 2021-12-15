import styled from 'styled-components';
import { StyledScrollArea } from '../../common/ScrollArea/style';

const StyledMenu = styled(StyledScrollArea)`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.main};
`;

export default StyledMenu;
