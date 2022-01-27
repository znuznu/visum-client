import React from 'react';

import { Flex } from '../common/Flex';
import { Grid } from '../common/Grid';
import PosterWithTooltip from '../PosterWithTooltip';
import { StatsMovie } from '../../models/statistics';
import StatisticsSectionHeader from '../StatisticsSectionHeader';
import { NoData } from '../NoData';

interface HighestRatedMoviesFromYearProps {
  released: StatsMovie[];
  older: StatsMovie[];
}

const colSize = '80px';

const Movies = ({
  movies,
  sectionTitle
}: {
  movies: StatsMovie[];
  sectionTitle: string;
}) => {
  return (
    <Flex flexDirection={'column'} margin={'0 0 1rem 0'}>
      <StatisticsSectionHeader title={sectionTitle} />
      {movies.length ? (
        <Grid gap={'0.5rem'} columnSize={colSize}>
          {movies.map((movie) => (
            <PosterWithTooltip
              key={`movie-${movie.id}`}
              width={colSize}
              height={'120px'}
              id={movie.id}
              title={movie.title}
              posterUrl={movie.posterUrl}
              releaseDate={movie.releaseDate}
              grade={movie.grade}
            />
          ))}
        </Grid>
      ) : (
        <NoData>No films found.</NoData>
      )}
    </Flex>
  );
};

const HighestRatedMoviesFromYear = ({
  older,
  released
}: HighestRatedMoviesFromYearProps) => {
  return (
    <>
      <Movies movies={released} sectionTitle={'Highest rated movies (released)'} />
      <Movies movies={older} sectionTitle={'Highest rated movies (older)'} />
    </>
  );
};

export default HighestRatedMoviesFromYear;
