import { HeartFilledIcon } from '@radix-ui/react-icons';
import styled from 'styled-components';

const FavoriteIcon = styled(HeartFilledIcon)`
  width: 1.3rem;
  height: 1.3rem;
  color: ${(props) => props.theme.colors.icons.favorite};
`;

const StyledTableData = styled.td`
  vertical-align: middle;
  padding: 0.3rem;
`;

const StyledMonth = styled.div`
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.main};
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props.theme.fontSizes.l};
  text-align: center;
  padding: 0.6rem;
`;

export { FavoriteIcon, StyledMonth, StyledTableData };
