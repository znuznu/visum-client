import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled(Link)`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.colors.border.secondary};

  &:hover {
    cursor: pointer;
  }
`;

export default StyledHeader;
