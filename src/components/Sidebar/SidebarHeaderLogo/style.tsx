import styled from 'styled-components';

const StyledTitle = styled.h1`
  color: ${(props) => props.theme.colors.button.main.color};
  font-size: ${(props) => props.theme.fontSizes.visum};
  font-family: ${(props) => props.theme.fonts.logo};
  text-align: center;
  flex: 1;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.button.main.color};
  }
`;

export default StyledTitle;
