import React from 'react';
import StyledTitle from './style';

type SidebarMenuSectionTitleProps = {
  value: string;
};

const SidebarMenuSectionTitle = ({ value }: SidebarMenuSectionTitleProps) => {
  return <StyledTitle>{value}</StyledTitle>;
};

export default SidebarMenuSectionTitle;
