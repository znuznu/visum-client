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
  Tooltip,
  BarController
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

import { Pair } from 'models/common';

import { Theme } from 'styles/theme';

import { Flex } from 'components/primitives/Flex';
import StatisticsSectionHeader from 'components/statistics/StatisticsSectionHeader';

ChartJS.register(
  BarController,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  Legend,
  Tooltip
);

type YearChartProps = {
  orderedYears: Pair<number, number>[];
  averageRating: Pair<number, number | null>[];
};

const YearChart = ({ orderedYears, averageRating }: YearChartProps) => {
  // @ts-ignore due to styled-components way to handle theme
  const theme: Theme = useTheme();

  // TODO fix responsive
  return (
    <Chart
      type="bar"
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
            data: averageRating.map((pair) => pair.value)
          }
        ]
      }}
    />
  );
};

const COMPARE_BY_YEAR = (a: Pair<number, number>, b: Pair<number, number>): number =>
  a.key - b.key;

/** Sort and add missing years with a default count of zero */
const convertToFullTimeline = (
  movieCountPerYear: Pair<number, number>[]
): Pair<number, number>[] => {
  if (!movieCountPerYear.length) {
    return [];
  }

  if (movieCountPerYear.length === 1) {
    return movieCountPerYear;
  }

  const ordered = [...movieCountPerYear].sort(COMPARE_BY_YEAR);

  const minKey = ordered[0].key;
  const maxKey = ordered[ordered.length - 1].key;

  const fullYearsRange = Array.from(new Array(maxKey - minKey + 1), (_, i) => i + minKey);

  return fullYearsRange.map((year) => {
    const indexOfYear = ordered.findIndex((sparseYear) => sparseYear.key === year);

    return indexOfYear !== -1 ? ordered[indexOfYear] : { key: year, value: 0 };
  });
};

const completeBasedOnMovieCountYears = (
  orderedMovieCount: Pair<number, number>[],
  averageRatingPerYear: Pair<number, number | null>[]
): Pair<number, number | null>[] => {
  if (!averageRatingPerYear.length) {
    return [];
  }

  if (averageRatingPerYear.length === 1) {
    return averageRatingPerYear;
  }

  // The complexity is O(over 9000) but it's okay since the array doesn't
  // contain a lot of elements unless the user is an anormal human being watching
  // 3278 movies/year, in wich case he should be using letterboxd instead
  return orderedMovieCount.map((movieCountPair) => {
    const averageRatingPairFound = averageRatingPerYear.find(
      (averageRatingPair) => averageRatingPair.key === movieCountPair.key
    );
    if (averageRatingPairFound) {
      return averageRatingPairFound;
    }

    return { key: movieCountPair.key, value: null };
  });
};

type YearChartsProps = {
  averageRating: Pair<number, number | null>[];
  movieCount: Pair<number, number>[];
};

const YearCharts = ({ averageRating, movieCount }: YearChartsProps) => {
  const [orderedYears] = useState(convertToFullTimeline(movieCount));

  return (
    <Flex flexDirection={'column'} margin={'0 0 1rem 0'}>
      <StatisticsSectionHeader title={'By release year, by average rate'} />
      <YearChart
        orderedYears={orderedYears}
        averageRating={completeBasedOnMovieCountYears(orderedYears, averageRating)}
      />
    </Flex>
  );
};

export default YearCharts;
