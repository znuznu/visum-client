import React, { useState } from 'react';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

import SidebarHeaderLogo from './SidebarHeaderLogo';
import SidebarMenu from './SidebarMenu';
import SidebarMenuSection from './SidebarMenuSection';
import SidebarMenuSectionTitle from './SidebarMenuSectionTitle';
import StyledSidebar from './style';
import { Separator } from '../common/Separator';
import SidebarMenuItemLink from './SidebarMenuItemLink';
import SidebarMenuItem from './SidebarMenuItem';
import Logout from '../Logout';
import useWindowSize from '../../hooks/useWindowSize';
import SidebarHeader from './SidebarHeader';
import Button from '../common/Button';
import { AccessibleIcon } from '../common/AccessibleIcon';
import { M_BREAKPOINT_IN_PIXEL } from '../../styles/theme/breakpoints';

const Sidebar = () => {
  const windowSize = useWindowSize();
  const [hideMenu, setHideMenu] = useState(true);

  return (
    <StyledSidebar>
      <SidebarHeader>
        <SidebarHeaderLogo>Visum</SidebarHeaderLogo>
        {windowSize.width < M_BREAKPOINT_IN_PIXEL ? (
          <Button
            onClick={() => setHideMenu(!hideMenu)}
            margin={'auto 1rem auto 0'}
            padding={'0.5rem'}
            position={'fixed'}
            top={'13px'}
            right={'0'}
          >
            <AccessibleIcon label={'Menu'}>
              <HamburgerMenuIcon />
            </AccessibleIcon>
          </Button>
        ) : null}
      </SidebarHeader>
      {windowSize.width < M_BREAKPOINT_IN_PIXEL && hideMenu ? null : (
        <SidebarMenu>
          <SidebarMenuSection>
            <SidebarMenuItemLink to={'/'} text={'Home'} />
            <SidebarMenuItemLink to={'/discover'} text={'Discover'} />
          </SidebarMenuSection>
          <Separator decorative />
          <SidebarMenuSection>
            <SidebarMenuSectionTitle value={'Content'} />
            <SidebarMenuItemLink to={'/films'} text={'Films'} />
            <SidebarMenuItemLink to={'/actors'} text={'Actors'} />
            <SidebarMenuItemLink to={'/directors'} text={'Directors'} />
          </SidebarMenuSection>
          <Separator decorative />
          <SidebarMenuSection>
            <SidebarMenuSectionTitle value={'Statistics'} />
            <SidebarMenuItemLink to={'/stats/all-time'} text={'All-time'} />
            <SidebarMenuItemLink to={'/stats/year'} text={'Per year'} />
          </SidebarMenuSection>
          <Separator decorative />
          <SidebarMenuSection>
            <SidebarMenuSectionTitle value={'Settings'} />
            <SidebarMenuItem>
              <Logout />
            </SidebarMenuItem>
          </SidebarMenuSection>
        </SidebarMenu>
      )}
    </StyledSidebar>
  );
};

export default Sidebar;
