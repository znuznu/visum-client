import { useQuery } from 'react-query';

import { fetchAllTimeStatistics } from 'services/api/statistics';

import useAuthentication from 'hooks/useAuthentication';

import AllTimeStatsCount from 'components/AllTimeStatsCount';
import HighestRatedMoviesPerDecade from 'components/HighestRatedMoviesPerDecade';
import BreakdownCharts from 'components/BreakdownCharts';
import YearCharts from 'components/YearCharts';
import ErrorText from 'components/common/ErrorText';

import { StyledAllTimeStatistics } from './style';

const AllTimeStatisticsPage = () => {
  const { jwtToken } = useAuthentication();

  const { isLoading, isError, data } = useQuery(
    'getAllTimeStatistics',
    () => fetchAllTimeStatistics({ authorization: `Bearer ${jwtToken}` }),
    {
      onError: () => {
        // TODO
      }
    }
  );

  if (isLoading) {
    // TODO spinner
    return <p>Loading</p>;
  }

  if (isError) {
    return <ErrorText />;
  }

  return (
    <StyledAllTimeStatistics>
      <AllTimeStatsCount
        totalRuntimeInHours={data!.totalRuntimeInHours}
        reviewCount={data!.reviewCount}
        movieCount={data!.movieCount.perYear.reduce(
          (acc, curr) => (acc += curr.value),
          0
        )}
      />

      <YearCharts
        averageRate={data!.averageRatePerYear}
        movieCount={data!.movieCount.perYear}
      />

      <BreakdownCharts
        perGenre={data!.movieCount.perGenre}
        perLanguage={data!.movieCount.perOriginalLanguage}
      />

      <HighestRatedMoviesPerDecade decades={data!.highestRatedMoviesPerDecade} />
    </StyledAllTimeStatistics>
  );
};

export default AllTimeStatisticsPage;
