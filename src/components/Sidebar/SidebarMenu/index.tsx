import React, { ReactNode } from 'react';
import {
  ScrollAreaScrollbar,
  ScrollAreaViewport,
  ScrollAreaThumb
} from '../../common/ScrollArea';
import StyledMenu from './style';

type SidebarMenuProps = {
  children: ReactNode;
};

const SidebarMenu = ({ children }: SidebarMenuProps) => {
  return (
    <StyledMenu>
      <ScrollAreaViewport>{children}</ScrollAreaViewport>
      <ScrollAreaScrollbar>
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
    </StyledMenu>
  );
};

export default SidebarMenu;
