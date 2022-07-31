import { useState } from 'react';
import {
  CalendarIcon,
  GlobeIcon,
  HamburgerMenuIcon,
  HomeIcon,
  PersonIcon
} from '@radix-ui/react-icons';
import { BsCameraReels } from 'react-icons/bs';
import { AiOutlineBarChart, AiOutlineLineChart } from 'react-icons/ai';

import useWindowSize from 'hooks/useWindowSize';

import { SIDEBAR_BREAKPOINT_PX } from 'styles/theme/breakpoints';

import { Separator } from 'components/primitives/Separator';
import Logout from 'components/sidebar/Logout';
import Button from 'components/primitives/Button';
import { AccessibleIcon } from 'components/primitives/AccessibleIcon';
import ThemeSwitcher from 'components/sidebar/ThemeSwitcher';

import SidebarHeaderLogo from './SidebarHeader/SidebarHeaderLogo';
import SidebarMenu from './SidebarMenu';
import SidebarMenuSection from './SidebarMenuSection';
import SidebarMenuSectionTitle from './SidebarMenuSectionTitle';
import StyledSidebar from './style';
import SidebarMenuItemLink from './SidebarMenuItemLink';
import SidebarMenuItem from './SidebarMenuItem';
import SidebarHeader from './SidebarHeader';

const Sidebar = () => {
  const windowSize = useWindowSize();
  const [isMenuHidden, hideMenu] = useState(true);

  const closeMenu = () => hideMenu(true);

  return (
    <StyledSidebar>
      <SidebarHeader>
        <SidebarHeaderLogo>Visum</SidebarHeaderLogo>
        {windowSize.width <= SIDEBAR_BREAKPOINT_PX ? (
          <Button
            onClick={() => hideMenu(!isMenuHidden)}
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
      {windowSize.width <= SIDEBAR_BREAKPOINT_PX && isMenuHidden ? null : (
        <SidebarMenu>
          <SidebarMenuSection>
            <SidebarMenuItemLink
              to={'/'}
              text={'Home'}
              icon={
                <AccessibleIcon label={'Home'}>
                  <HomeIcon />
                </AccessibleIcon>
              }
              onClick={closeMenu}
            />
            <SidebarMenuItemLink
              to={'/discovery'}
              text={'Discovery'}
              icon={
                <AccessibleIcon label={'Discovery'}>
                  <GlobeIcon />
                </AccessibleIcon>
              }
              onClick={closeMenu}
            />
          </SidebarMenuSection>
          <Separator decorative />
          <SidebarMenuSection>
            <SidebarMenuSectionTitle value={'Content'} />
            <SidebarMenuItemLink
              to={'/diary'}
              text={'Diary'}
              icon={
                <AccessibleIcon label={'Diary'}>
                  <CalendarIcon />
                </AccessibleIcon>
              }
              onClick={closeMenu}
            />
            <SidebarMenuItemLink
              to={'/films'}
              text={'Films'}
              icon={
                <AccessibleIcon label={'Films'}>
                  <BsCameraReels />
                </AccessibleIcon>
              }
              onClick={closeMenu}
            />
            <SidebarMenuItemLink
              to={'/actors'}
              text={'Actors'}
              icon={
                <AccessibleIcon label={'Actors'}>
                  <PersonIcon />
                </AccessibleIcon>
              }
              onClick={closeMenu}
            />
            <SidebarMenuItemLink
              to={'/directors'}
              text={'Directors'}
              icon={
                <AccessibleIcon label={'Directors'}>
                  <PersonIcon />
                </AccessibleIcon>
              }
              onClick={closeMenu}
            />
          </SidebarMenuSection>
          <Separator decorative />
          <SidebarMenuSection>
            <SidebarMenuSectionTitle value={'Statistics'} />
            <SidebarMenuItemLink
              to={'/stats/all-time'}
              text={'All-time'}
              icon={
                <AccessibleIcon label={'All-time stats'}>
                  <AiOutlineBarChart />
                </AccessibleIcon>
              }
              onClick={closeMenu}
            />
            <SidebarMenuItemLink
              to={'/stats/year'}
              text={'Per year'}
              icon={
                <AccessibleIcon label={'Stats per year'}>
                  <AiOutlineLineChart />
                </AccessibleIcon>
              }
              onClick={closeMenu}
            />
          </SidebarMenuSection>
          <Separator decorative />
          <SidebarMenuSection>
            <SidebarMenuSectionTitle value={'Settings'} />
            <SidebarMenuItem>
              <ThemeSwitcher />
            </SidebarMenuItem>
            <Separator decorative />
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
