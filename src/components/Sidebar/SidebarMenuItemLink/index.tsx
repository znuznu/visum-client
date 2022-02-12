import React from 'react';
import { useMatch, useResolvedPath } from 'react-router-dom';

import StyledSidebarMenuItemLink from './style';

type SidebarMenuItemLinksProps = {
  to: string;
  text: string;
};

const SidebarMenuItemLink = ({ to, text }: SidebarMenuItemLinksProps) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <StyledSidebarMenuItemLink to={to} $isActive={match !== null}>
      {text}
    </StyledSidebarMenuItemLink>
  );
};

export default SidebarMenuItemLink;
