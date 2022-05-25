import { Link } from 'react-router-dom';

import { StatsMovie } from 'models/statistics';
import { Pair } from 'models/helpers';

import { Flex } from 'components/common/Flex';
import { Grid } from 'components/common/Grid';
import PosterTooltip from 'components/PosterTooltip';
import StatisticsSectionHeader from 'components/StatisticsSectionHeader';
import { NoData } from 'components/NoData';

import { StyledDecade, StyledYear } from './style';

interface HighestRatedMoviesPerDecadeProps {
  decades: Pair<number, StatsMovie[]>[];
}

const colSize = '80px';

const HighestRatedMoviesPerDecade = ({ decades }: HighestRatedMoviesPerDecadeProps) => {
  return (
    <Flex flexDirection={'column'} margin={'0 0 1rem 0'}>
      <StatisticsSectionHeader title={'Highest rated movies per decade'} />
      {decades.length ? (
        decades.map((decade) => (
          <StyledDecade key={`decade-${decade.key}`}>
            <StyledYear>{decade.key}</StyledYear>
            <Grid gap={'0.5rem'} columnSize={colSize}>
              {decade.value.map((movie) => (
                <Link to={`/film/${movie.id}`} key={`decade-movie-${movie.id}`}>
                  <PosterTooltip width={colSize} height={'120px'} movie={movie} />
                </Link>
              ))}
            </Grid>
          </StyledDecade>
        ))
      ) : (
        <NoData>No decades found.</NoData>
      )}
    </Flex>
  );
};

export default HighestRatedMoviesPerDecade;
