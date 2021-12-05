import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.button.main.bg};
  border: none;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.button.main.color};
  font-size: ${(props) => props.theme.fontSizes.button};
  font-family: ${(props) => props.theme.fonts.main};
  font-weight: 900;
  margin: auto;
  padding: 0.4rem;
  width: auto;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.button.main.color};
    background-color: ${(props) => props.theme.colors.button.main.bgHover};
  }
`;

export default StyledButton;
