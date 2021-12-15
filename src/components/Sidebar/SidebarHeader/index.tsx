import React, { ReactNode } from 'react';
import StyledHeader from './style';

type SidebarHeaderProps = {
  children: ReactNode;
};

const SidebarHeader = ({ children }: SidebarHeaderProps) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default SidebarHeader;
