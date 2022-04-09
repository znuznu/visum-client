import React from 'react';

import RecentMovies from '../../components/RecentMovies';
import RecentReviews from '../../components/RecentReviews';
import MoviesToWatch from '../../components/MoviesToWatch';
import { StyledHome } from './style';

const MOVIE_LIMIT = 18;
const REVIEW_LIMIT = 8;
const TO_WATCH_LIMIT = 18;

const HomePage = () => {
  return (
    <StyledHome>
      <RecentMovies limit={MOVIE_LIMIT} />
      <MoviesToWatch limit={TO_WATCH_LIMIT} />
      <RecentReviews limit={REVIEW_LIMIT} />
    </StyledHome>
  );
};

export default HomePage;
