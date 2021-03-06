import { Outlet } from 'react-router-dom';

import Sidebar from 'components/sidebar/Sidebar';

import Content from './Content';
import StyledShell from './style';

const Shell = () => {
  return (
    <StyledShell>
      <Sidebar />
      <Content>
        <Outlet />
      </Content>
    </StyledShell>
  );
};

export default Shell;
