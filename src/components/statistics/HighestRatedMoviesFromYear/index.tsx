import { Link } from 'react-router-dom';

import { StatsMovie } from 'models/statistics';

import { Flex } from 'components/primitives/Flex';
import { Grid } from 'components/primitives/Grid';
import PosterTooltip from 'components/common/Poster/PosterTooltip';
import StatisticsSectionHeader from 'components/statistics/StatisticsSectionHeader';
import { NoData } from 'components/common/NoData';

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
            <Link to={`/film/${movie.id}`} key={`movie-${movie.id}`}>
              <PosterTooltip width={colSize} height={'120px'} movie={movie} />
            </Link>
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
