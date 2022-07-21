import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import useTheme from 'hooks/useTheme';

import SignPage from 'pages/Sign';
import Shell from 'pages/Shell';
import HomePage from 'pages/Home';
import FilmsPage from 'pages/Films';
import FilmPage from 'pages/Film';
import AllTimeStatisticsPage from 'pages/AllTimeStatistics';
import PerYearStatisticsPage from 'pages/PerYearStatistics';
import DiscoveryPage from 'pages/Discovery';
import TmdbFilmPage from 'pages/TmdbFilm';
import ActorsPage from 'pages/Actors';
import DirectorsPage from 'pages/Directors';
import ActorPage from 'pages/Actor';
import DirectorPage from 'pages/Director';
import DiaryPage from 'pages/Diary';

import Guard from 'components/primitives/Guard';
import { TooltipProvider } from 'components/primitives/Tooltip';

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
  cache: new InMemoryCache({
    typePolicies: {
      DiaryMovie: {
        keyFields: ['id', 'isRewatch']
      }
    }
  })
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
            <TooltipProvider>
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
            </TooltipProvider>
          </ThemeContext.Provider>
        </ThemeProvider>
      </QueryClientProvider>
    </ApolloProvider>
  );
};

export default App;
