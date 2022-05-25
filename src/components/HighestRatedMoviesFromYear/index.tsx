import { Link } from 'react-router-dom';
import { Flex } from 'components/common/Flex';
import { Grid } from 'components/common/Grid';
import PosterTooltip from 'components/PosterTooltip';
import { StatsMovie } from 'models/statistics';
import StatisticsSectionHeader from 'components/StatisticsSectionHeader';
import { NoData } from 'components/NoData';

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
