import { ReactNode } from 'react';

import StyledMenuSection from './style';

type SidebarMenuSectionProps = {
  children: ReactNode;
};

const SidebarMenuSection = ({ children }: SidebarMenuSectionProps) => {
  return <StyledMenuSection>{children}</StyledMenuSection>;
};

export default SidebarMenuSection;
