import React from 'react';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { sithTheme } from './styles/theme/sith';
import GlobalStyle from './styles/theme/GlobalStyle';
import SignPage from './pages/Sign';
import Guard from './components/common/Guard';
import { AuthProvider } from './providers/AuthProvider';
import Shell from './pages/Shell';
import Home from './pages/Home';
import Films from './pages/Films';
import Film from './pages/Film';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={sithTheme}>
        <AuthProvider>
          <GlobalStyle />
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <Guard>
                    <Shell />
                  </Guard>
                }
              >
                <Route path="" element={<Home />} />
                <Route path="films" element={<Films />} />
                <Route path="film/:movieId" element={<Film />} />
              </Route>
              <Route path="/sign" element={<SignPage />} />
              <Route path="*" element={<Navigate to="/sign" />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
