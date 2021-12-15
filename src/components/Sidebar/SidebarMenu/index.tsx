import React, { ReactNode } from 'react';
import {
  StyledScrollAreaScrollbar,
  StyledScrollAreaViewport,
  StyledThumb
} from '../../common/ScrollArea/style';
import StyledMenu from './style';

type SidebarMenuProps = {
  children: ReactNode;
};

const SidebarMenu = ({ children }: SidebarMenuProps) => {
  return (
    <StyledMenu>
      <StyledScrollAreaViewport>{children}</StyledScrollAreaViewport>
      <StyledScrollAreaScrollbar>
        <StyledThumb />
      </StyledScrollAreaScrollbar>
    </StyledMenu>
  );
};

export default SidebarMenu;
