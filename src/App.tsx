import React from 'react';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { sithTheme } from './styles/theme';
import GlobalStyle from './styles/theme/GlobalStyle';
import SignPage from './pages/SignPage';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={sithTheme}>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path="/sign" element={<SignPage />} />
            <Route path="*" element={<Navigate to="/sign" />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
