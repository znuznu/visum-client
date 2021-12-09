import React, { ReactNode } from 'react';
import StyledTitle from './style';

type SidebarHeaderLogoProps = {
  children: ReactNode;
};

const SidebarHeaderLogo = ({ children }: SidebarHeaderLogoProps) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default SidebarHeaderLogo;
