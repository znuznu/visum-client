import React, { ReactNode } from 'react';
import StyledSidebarMenuItemLink from './style';

type SidebarMenuItemLinksProps = {
  href: string;
  text: string;
};

const SidebarMenuItemLink = ({ href, text }: SidebarMenuItemLinksProps) => {
  return <StyledSidebarMenuItemLink href={href}>{text}</StyledSidebarMenuItemLink>;
};

export default SidebarMenuItemLink;
