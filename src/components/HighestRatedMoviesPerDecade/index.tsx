import React from 'react';
import { Flex } from '../common/Flex';
import { Grid } from '../common/Grid';
import PosterWithTooltip from '../PosterWithTooltip';
import { StatsMovie } from '../../models/statistics';
import StatisticsSectionHeader from '../StatisticsSectionHeader';
import { StyledDecade, StyledYear } from './style';
import { Pair } from '../../models/utils';
import { NoData } from '../NoData';

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
                <PosterWithTooltip
                  key={`decade-${movie.id}`}
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
          </StyledDecade>
        ))
      ) : (
        <NoData>No decades found.</NoData>
      )}
    </Flex>
  );
};

export default HighestRatedMoviesPerDecade;
