import { ReactNode } from 'react';
import {
  ScrollAreaScrollbar,
  ScrollAreaViewport,
  ScrollAreaThumb
} from 'components/common/ScrollArea';
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
