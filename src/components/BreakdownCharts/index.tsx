import React, { Fragment, useState } from 'react';
import { Pair } from '../../models/utils';
import StatisticsSectionHeader from '../StatisticsSectionHeader';
import { Flex } from '../common/Flex';
import {
  StyledBreakdownCharts,
  StyledBarLabel,
  StyledBarValue,
  StyledBarDetails,
  StyledGrid
} from './style';

interface BreakdownChartsProps {
  perLanguage: Pair<string, number>[];
  perGenre: Pair<string, number>[];
}

export const getCeilPercentage = (max: number, x: number) => {
  return Math.ceil((x / max) * 100);
};

const BarValue = ({ count, percentage }: { count: number; percentage: number }) => {
  return (
    <StyledBarValue widthPercentage={percentage}>
      <StyledBarDetails>{count} films</StyledBarDetails>
    </StyledBarValue>
  );
};

const CountCharts = ({ movieCount }: { movieCount: Pair<string, number>[] }) => {
  const [maxValue] = useState(movieCount[0].value);

  return (
    <StyledGrid>
      {movieCount.map((movieCount) => {
        return (
          // TODO this wrapper should be replaced by a link to a
          // diary containing all films related to the resource itself
          // (eg: genre, language, production)
          <Fragment key={`${movieCount.key}`}>
            <StyledBarLabel>{movieCount.key}</StyledBarLabel>
            <BarValue
              count={movieCount.value}
              percentage={getCeilPercentage(maxValue, movieCount.value)}
            />
          </Fragment>
        );
      })}
    </StyledGrid>
  );
};

const BreakdownCharts = ({ perLanguage, perGenre }: BreakdownChartsProps) => {
  return (
    <Flex flexDirection={'column'} margin={'0 0 1rem 0'}>
      <StatisticsSectionHeader title={'Genres, original language'} />
      <StyledBreakdownCharts>
        <CountCharts movieCount={perGenre} />
        <CountCharts movieCount={perLanguage} />
      </StyledBreakdownCharts>
    </Flex>
  );
};

export default BreakdownCharts;
