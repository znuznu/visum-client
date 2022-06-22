import { ReactNode } from 'react';

import StyledSidebarMenuItem from './style';

type SidebarMenuItemProps = {
  children: ReactNode;
};

const SidebarMenuItem = ({ children }: SidebarMenuItemProps) => {
  return <StyledSidebarMenuItem>{children}</StyledSidebarMenuItem>;
};

export default SidebarMenuItem;
