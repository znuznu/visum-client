import styled from 'styled-components';

const StyledSidebarMenuItemLink = styled.a`
  border-radius: 5px;
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props.theme.fontSizes.sidebar.item};
  font-family: ${(props) => props.theme.fonts.main};
  text-decoration: none;
  margin: 0 0.6rem;
  padding: 0.3rem 0.7rem;

  &:hover {
    color: ${(props) => props.theme.colors.sidebar.hover.color};
    background-color: ${(props) => props.theme.colors.sidebar.hover.bg};
  }

  &:focus {
    color: ${(props) => props.theme.colors.sidebar.hover.color};
    background-color: ${(props) => props.theme.colors.sidebar.hover.bgPressed};
  }

  &:active {
    color: ${(props) => props.theme.colors.sidebar.hover.color};
    background-color: ${(props) => props.theme.colors.sidebar.hover.bgPressed};
  }
`;

export default StyledSidebarMenuItemLink;
