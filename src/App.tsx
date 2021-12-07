import React from 'react';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { sithTheme } from './styles/theme';
import GlobalStyle from './styles/theme/GlobalStyle';
import SignPage from './pages/SignPage';
import Guard from './components/core/Guard';
import { AuthProvider } from './providers/AuthProvider';
import HomePage from './pages/HomePage';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={sithTheme}>
        <AuthProvider>
          <GlobalStyle />
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <Guard>
                    <HomePage />
                  </Guard>
                }
              />
              <Route path="/sign" element={<SignPage />} />
              <Route path="*" element={<Navigate to="/sign" />} />
            </Routes>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
