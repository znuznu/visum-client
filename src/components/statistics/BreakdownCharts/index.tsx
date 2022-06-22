import { Fragment } from 'react';

import { Pair } from 'models/common';

import { Flex } from 'components/primitives/Flex';
import StatisticsSectionHeader from 'components/statistics/StatisticsSectionHeader';
import { NoData } from 'components/common/NoData';

import {
  StyledBarDetails,
  StyledBarLabel,
  StyledBarValue,
  StyledBreakdownCharts,
  StyledGrid
} from './style';

interface BreakdownChartsProps {
  perLanguage?: Pair<string, number>[];
  perGenre?: Pair<string, number>[];
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
  return (
    <StyledGrid>
      {movieCount.map((count) => {
        return (
          // TODO this wrapper should be replaced by a link to a
          // diary containing all films related to the resource itself
          // (eg: genre, language, production)
          <Fragment key={`${count.key}`}>
            <StyledBarLabel>{count.key}</StyledBarLabel>
            <BarValue
              count={count.value}
              percentage={getCeilPercentage(movieCount[0].value, count.value)}
            />
          </Fragment>
        );
      })}
    </StyledGrid>
  );
};

enum ChartContentType {
  GENRE = 'genres',
  LANGUAGE = 'languages'
}

const buildTitle = (types: ChartContentType[]): string => {
  return types.join(', ');
};

const propsToContentType: Record<string, ChartContentType> = {
  perGenre: ChartContentType.GENRE,
  perLanguage: ChartContentType.LANGUAGE
};

const BreakdownCharts = (props: BreakdownChartsProps) => {
  return (
    <Flex flexDirection={'column'} margin={'0 0 1rem 0'}>
      <StatisticsSectionHeader
        title={buildTitle(
          Object.keys(props).map((property) => propsToContentType[property])
        )}
      />
      {!props.perGenre?.length && !props.perLanguage?.length ? (
        <NoData>No data.</NoData>
      ) : null}
      <StyledBreakdownCharts>
        {props.perGenre && <CountCharts movieCount={props.perGenre} />}
        {props.perLanguage && <CountCharts movieCount={props.perLanguage} />}
      </StyledBreakdownCharts>
    </Flex>
  );
};

export default BreakdownCharts;
