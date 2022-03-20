import React, { useState } from 'react';
import {
  CalendarIcon,
  GlobeIcon,
  HamburgerMenuIcon,
  HomeIcon,
  PersonIcon
} from '@radix-ui/react-icons';

import { BsCameraReels } from 'react-icons/bs';
import { AiOutlineBarChart, AiOutlineLineChart } from 'react-icons/ai';

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
import ThemeSwitcher from '../ThemeSwitcher';

const Sidebar = () => {
  const windowSize = useWindowSize();
  const [hideMenu, setHideMenu] = useState(true);

  return (
    <StyledSidebar>
      <SidebarHeader>
        <SidebarHeaderLogo>Visum</SidebarHeaderLogo>
        {windowSize.width <= M_BREAKPOINT_IN_PIXEL ? (
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
      {windowSize.width <= M_BREAKPOINT_IN_PIXEL && hideMenu ? null : (
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
            />
            <SidebarMenuItemLink
              to={'/discovery'}
              text={'Discovery'}
              icon={
                <AccessibleIcon label={'Discovery'}>
                  <GlobeIcon />
                </AccessibleIcon>
              }
            />
            <SidebarMenuItemLink
              to={'/diary'}
              text={'Diary'}
              icon={
                <AccessibleIcon label={'Diary'}>
                  <CalendarIcon />
                </AccessibleIcon>
              }
            />
          </SidebarMenuSection>
          <Separator decorative />
          <SidebarMenuSection>
            <SidebarMenuSectionTitle value={'Content'} />
            <SidebarMenuItemLink
              to={'/films'}
              text={'Films'}
              icon={
                <AccessibleIcon label={'Films'}>
                  <BsCameraReels />
                </AccessibleIcon>
              }
            />
            <SidebarMenuItemLink
              to={'/actors'}
              text={'Actors'}
              icon={
                <AccessibleIcon label={'Actors'}>
                  <PersonIcon />
                </AccessibleIcon>
              }
            />
            <SidebarMenuItemLink
              to={'/directors'}
              text={'Directors'}
              icon={
                <AccessibleIcon label={'Directors'}>
                  <PersonIcon />
                </AccessibleIcon>
              }
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
            />
            <SidebarMenuItemLink
              to={'/stats/year'}
              text={'Per year'}
              icon={
                <AccessibleIcon label={'Stats per year'}>
                  <AiOutlineLineChart />
                </AccessibleIcon>
              }
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
