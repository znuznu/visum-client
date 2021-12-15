import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Home from '../Home';
import Content from './Content';
import StyledShell from './style';

const Shell = () => {
  return (
    <StyledShell>
      <Sidebar />
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Content>
    </StyledShell>
  );
};

export default Shell;
