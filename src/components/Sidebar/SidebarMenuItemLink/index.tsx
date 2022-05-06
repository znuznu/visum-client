import React, { ReactElement, ReactEventHandler } from 'react';
import { useMatch, useResolvedPath } from 'react-router-dom';

import { StyledSidebarMenuItemLink, StyledSidebarMenuItemLinkIcon } from './style';

type SidebarMenuItemLinksProps = {
  to: string;
  text: string;
  icon?: ReactElement;
  onClick?: ReactEventHandler;
};

const SidebarMenuItemLink = ({ to, text, icon, onClick }: SidebarMenuItemLinksProps) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <StyledSidebarMenuItemLink to={to} $isActive={match !== null} onClick={onClick}>
      {icon && <StyledSidebarMenuItemLinkIcon>{icon}</StyledSidebarMenuItemLinkIcon>}
      {text}
    </StyledSidebarMenuItemLink>
  );
};

export default SidebarMenuItemLink;
