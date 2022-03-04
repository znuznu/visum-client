import React, { ReactElement } from 'react';
import { useMatch, useResolvedPath } from 'react-router-dom';

import { StyledSidebarMenuItemLink, StyledSidebarMenuItemLinkIcon } from './style';

type SidebarMenuItemLinksProps = {
  to: string;
  text: string;
  icon?: ReactElement;
};

const SidebarMenuItemLink = ({ to, text, icon }: SidebarMenuItemLinksProps) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <StyledSidebarMenuItemLink to={to} $isActive={match !== null}>
      {icon && <StyledSidebarMenuItemLinkIcon>{icon}</StyledSidebarMenuItemLinkIcon>}
      {text}
    </StyledSidebarMenuItemLink>
  );
};

export default SidebarMenuItemLink;
