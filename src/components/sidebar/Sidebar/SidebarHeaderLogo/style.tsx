import styled from 'styled-components';

const StyledTitle = styled.h1`
  color: ${(props) => props.theme.colors.button.default.color};
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-family: ${(props) => props.theme.fonts.logo};
  text-align: center;
  flex: 1;
  margin: 13px 0;
  text-decoration: none;
`;

export default StyledTitle;
