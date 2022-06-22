import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.colors.border.secondary};
`;

export default StyledHeader;
