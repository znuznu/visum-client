import { HTTPError } from 'ky';
import React from 'react';
import { useQuery } from 'react-query';
import AllTimeStatsCount from '../../components/AllTimeStatsCount';
import useAuthentication from '../../hooks/useAuthentication';
import { fetchAllTimeStatistics } from '../../services/api/statistics';
import HighestRatedMoviesPerDecade from '../../components/HighestRatedMoviesPerDecade';
import { StyledAllTimeStatistics } from './style';
import BreakdownCharts from '../../components/BreakdownCharts';
import YearCharts from '../../components/YearCharts';

const AllTimeStatisticsPage = () => {
  const { jwtToken } = useAuthentication();

  const { isLoading, isError, data } = useQuery(
    'getAllTimeStatistics',
    () => fetchAllTimeStatistics({ authorization: `Bearer ${jwtToken}` }),
    {
      onError: (error: HTTPError) => {
        // TODO
      }
    }
  );

  if (isLoading) {
    // TODO spinner
    return <p>Loading</p>;
  }

  if (isError) {
    // TODO style
    return <p>Something wrent wrong. Please reload.</p>;
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
