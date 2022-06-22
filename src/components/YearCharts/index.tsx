import { useState } from 'react';
import { useTheme } from 'styled-components';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

import { Pair } from 'models/common';

import { Theme } from 'styles/theme';

import { Flex } from 'components/primitives/Flex';
import StatisticsSectionHeader from 'components/StatisticsSectionHeader';

interface YearChartsProps {
  averageRate: Pair<number, number>[];
  movieCount: Pair<number, number>[];
}

ChartJS.register(
  LineController,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

interface YearChartProps {
  orderedYears: Pair<number, number>[];
  orderedRate: Pair<number, number>[];
}

const YearChart = ({ orderedYears, orderedRate }: YearChartProps) => {
  // @ts-ignore due to styled-components way to handle theme
  const theme: Theme = useTheme();

  // TODO fix responsive
  return (
    <Chart
      type="line"
      data={{
        labels: orderedYears.map((pair) => pair.key),
        datasets: [
          {
            label: 'Films count',
            backgroundColor: theme.colors.secondary,
            borderColor: theme.colors.secondary,
            data: orderedYears.map((pair) => pair.value)
          },
          {
            label: 'Average rate',
            backgroundColor: theme.colors.tertiary,
            borderColor: theme.colors.tertiary,
            data: orderedRate.map((pair) => pair.value)
          }
        ]
      }}
    />
  );
};

/**
 * TODO
 * Fill an ordered sparse timeline with pairs of years with 0 count.
 * This thing is inefficient, not safe at all and should be done server side.
 */
const convertToFullTimeline = (
  orderedSparseTimeline: Pair<number, number>[]
): Pair<number, number>[] => {
  if (!orderedSparseTimeline.length) {
    return [];
  }

  const minKey = orderedSparseTimeline[0].key;
  const maxKey = orderedSparseTimeline[orderedSparseTimeline.length - 1].key;

  const fullYearsRange = Array.from(new Array(maxKey - minKey + 1), (_, i) => i + minKey);

  return fullYearsRange.map((year) => {
    const indexOfYear = orderedSparseTimeline.findIndex(
      (sparseYear) => sparseYear.key === year
    );

    return indexOfYear !== -1
      ? orderedSparseTimeline[indexOfYear]
      : { key: year, value: 0 };
  });
};

const yearComparator = (a: Pair<number, number>, b: Pair<number, number>): number =>
  a.key - b.key;

const YearCharts = ({ averageRate, movieCount }: YearChartsProps) => {
  const [orderedYears] = useState([...movieCount].sort(yearComparator));
  const [orderedRate] = useState([...averageRate].sort(yearComparator));

  return (
    <Flex flexDirection={'column'} margin={'0 0 1rem 0'}>
      <StatisticsSectionHeader title={'By release year, by average rate'} />
      <YearChart
        orderedYears={convertToFullTimeline(orderedYears)}
        orderedRate={convertToFullTimeline(orderedRate)}
      />
    </Flex>
  );
};

export default YearCharts;
