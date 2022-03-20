import styled from 'styled-components';

const StyledMonth = styled.div`
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.main};
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props.theme.fontSizes.l};
  text-align: center;
  padding: 0.6rem;
`;

export { StyledMonth };
