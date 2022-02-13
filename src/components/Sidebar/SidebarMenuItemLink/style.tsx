import { Link } from 'react-router-dom';
import styled from 'styled-components';

type StyledSidebarMenuItemLinkProps = {
  $isActive: boolean;
};

const StyledSidebarMenuItemLink = styled(Link)<StyledSidebarMenuItemLinkProps>`
  border-radius: 5px;
  color: ${(props) => {
    return props.$isActive
      ? props.theme.colors.sidebar.hover.color
      : props.theme.colors.text.primary;
  }};
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props.theme.fontSizes.m};
  font-family: ${(props) => props.theme.fonts.main};
  text-decoration: none;
  margin: 0 0.6rem;
  padding: 0.3rem 0.7rem;

  &:hover {
    color: ${(props) => props.theme.colors.sidebar.hover.color};
    background-color: ${(props) => props.theme.colors.sidebar.hover.bg};
    cursor: pointer;
  }
`;

export default StyledSidebarMenuItemLink;
