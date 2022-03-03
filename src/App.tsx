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
import HomePage from './pages/HomePage';
import FilmsPage from './pages/FilmsPage';
import FilmPage from './pages/FilmPage';
import AllTimeStatisticsPage from './pages/AllTimeStatisticsPage';
import PerYearStatisticsPage from './pages/PerYearStatisticsPage';
import DiscoverPage from './pages/DiscoverPage';
import TmdbFilmPage from './pages/TmdbFilmPage';
import DirectorsPage from './pages/DirectorsPage';
import ActorsPage from './pages/ActorsPage';
import DirectorPage from './pages/DirectorPage';
import ActorPage from './pages/ActorPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

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
                <Route path="" element={<HomePage />} />

                <Route path="films" element={<FilmsPage />} />
                <Route path="film/:movieId" element={<FilmPage />} />

                <Route path="stats/all-time" element={<AllTimeStatisticsPage />} />

                <Route path="stats/year">
                  <Route path="" element={<PerYearStatisticsPage />} />
                  <Route path=":year" element={<PerYearStatisticsPage />} />
                </Route>

                <Route path="discover" element={<DiscoverPage />} />

                <Route path="tmdb/film/:tmdbId" element={<TmdbFilmPage />} />

                <Route path="directors" element={<DirectorsPage />} />
                <Route path="director/:id" element={<DirectorPage />} />

                <Route path="actors" element={<ActorsPage />} />
                <Route path="actor/:id" element={<ActorPage />} />
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
