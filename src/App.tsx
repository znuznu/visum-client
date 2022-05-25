import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Guard from 'components/common/Guard';

import useTheme from 'hooks/useTheme';

import SignPage from 'pages/Sign';
import Shell from 'pages/Shell';
import HomePage from 'pages/HomePage';
import FilmsPage from 'pages/FilmsPage';
import FilmPage from 'pages/FilmPage';
import AllTimeStatisticsPage from 'pages/AllTimeStatisticsPage';
import PerYearStatisticsPage from 'pages/PerYearStatisticsPage';
import DiscoveryPage from 'pages/DiscoveryPage';
import TmdbFilmPage from 'pages/TmdbFilmPage';
import ActorsPage from 'pages/ActorsPage';
import DirectorsPage from 'pages/DirectorsPage';
import ActorPage from 'pages/ActorPage';
import DirectorPage from 'pages/DirectorPage';
import DiaryPage from 'pages/DiaryPage';

import ThemeContext from './providers/ThemeProvider';
import { AuthProvider } from './providers/AuthProvider';
import GlobalStyle from './styles/theme/GlobalStyle';
import { API_URL } from './config';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

const apolloClient = new ApolloClient({
  uri: `${API_URL}/graphql`,
  cache: new InMemoryCache()
});

const App = () => {
  const { theme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [theme, setSelectedTheme]);

  return (
    <ApolloProvider client={apolloClient}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={selectedTheme}>
          <ThemeContext.Provider value={{ selectedTheme, setSelectedTheme }}>
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

                    <Route path="discovery" element={<DiscoveryPage />} />

                    <Route path="diary">
                      <Route path="" element={<DiaryPage />} />
                      <Route path=":year" element={<DiaryPage />} />
                    </Route>

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
          </ThemeContext.Provider>
        </ThemeProvider>
      </QueryClientProvider>
    </ApolloProvider>
  );
};

export default App;
