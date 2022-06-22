import { useQuery } from 'react-query';
import { useParams } from 'react-router';

import { fetchYearStatistics } from 'services/api/statistics';

import useAuthentication from 'hooks/useAuthentication';

import PerYearStatsCount from 'components/PerYearStatsCount';
import BreakdownCharts from 'components/BreakdownCharts';
import HighestRatedMoviesFromYear from 'components/HighestRatedMoviesFromYear';
import ErrorText from 'components/common/ErrorText';
import { Flex } from 'components/primitives/Flex';
import Button from 'components/primitives/Button';
import { AccessibleIcon } from 'components/primitives/AccessibleIcon';

import {
  NextIcon,
  PreviousIcon,
  StyledLink,
  StyledPerYearStatistics,
  StyledYearTitle
} from './style';

const MIN_YEAR = 1900;

const PerYearStatisticsPage = () => {
  const { jwtToken } = useAuthentication();
  const { year = new Date().getFullYear().toString() } = useParams();

  const { isLoading, isError, data } = useQuery(
    ['getYearStatistics', year],
    () => fetchYearStatistics({ authorization: `Bearer ${jwtToken}` }, parseInt(year)),
    {
      onError: () => {
        // TODO
      },
      retry: false
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
    <StyledPerYearStatistics>
      {data && (
        <>
          <Flex justifyContent={'center'}>
            {parseInt(year) - 1 >= MIN_YEAR ? (
              <StyledLink to={`../${parseInt(year) - 1}`}>
                <Button margin={'auto 2rem auto 0'}>
                  <AccessibleIcon label="Previous year">
                    <PreviousIcon />
                  </AccessibleIcon>
                </Button>
              </StyledLink>
            ) : (
              <Button margin={'auto 2rem auto 0'} disabled>
                <AccessibleIcon label="Previous year">
                  <PreviousIcon />
                </AccessibleIcon>
              </Button>
            )}

            <StyledYearTitle>{year}</StyledYearTitle>

            <StyledLink to={`../${parseInt(year) + 1}`}>
              <Button margin={'auto 0 auto 2rem'}>
                <AccessibleIcon label="Next year">
                  <NextIcon />
                </AccessibleIcon>
              </Button>
            </StyledLink>
          </Flex>
          <PerYearStatsCount
            totalRuntimeInHours={data!.totalRuntimeInHours}
            reviewsWrittenCount={data!.reviewCount}
            movieCount={data!.movieCount}
          />

          <BreakdownCharts perGenre={data!.movieCountPerGenre} />

          <HighestRatedMoviesFromYear
            released={data!.highestRatedMovies.released}
            older={data!.highestRatedMovies.older}
          />
        </>
      )}
    </StyledPerYearStatistics>
  );
};

export default PerYearStatisticsPage;
