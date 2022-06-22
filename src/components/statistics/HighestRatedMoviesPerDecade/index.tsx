import { Link } from 'react-router-dom';

import { Pair } from 'models/common';
import { StatsMovie } from 'models/statistics';

import { Flex } from 'components/primitives/Flex';
import { Grid } from 'components/primitives/Grid';
import PosterTooltip from 'components/common/Poster/PosterTooltip';
import StatisticsSectionHeader from 'components/statistics/StatisticsSectionHeader';
import { NoData } from 'components/common/NoData';

import { StyledDecade, StyledYear } from './style';

interface HighestRatedMoviesPerDecadeProps {
  decades: Pair<number, StatsMovie[]>[];
}

const colSize = '80px';

const HighestRatedMoviesPerDecade = ({ decades }: HighestRatedMoviesPerDecadeProps) => {
  return (
    <Flex flexDirection={'column'}>
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
