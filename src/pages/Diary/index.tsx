import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { DiaryFiltersInput, DiaryYear } from 'models/diary';

import { QUERY_DIARY } from 'services/graphql/queryDiary';

import useAuthentication from 'hooks/useAuthentication';

import {
  NextIcon,
  PreviousIcon,
  StyledLink,
  StyledYearTitle
} from 'pages/PerYearStatistics/style';

import { AccessibleIcon } from 'components/primitives/AccessibleIcon';
import Button from 'components/primitives/Button';
import { Flex } from 'components/primitives/Flex';
import Diary from 'components/diary/DiaryYear';
import ErrorText from 'components/common/ErrorText';
import { NoData } from 'components/common/NoData';

import { StyledDiary } from './style';

const MIN_YEAR = 2020;

const DiaryPage = () => {
  const { year = new Date().getFullYear().toString() } = useParams<'year'>();
  const [currentYear, setCurrentYear] = useState(parseInt(year));
  const { jwtToken } = useAuthentication();

  // TODO Filters handling with HTML select/search params

  const [filters, setFilters] = useState<DiaryFiltersInput>({
    year: currentYear,
    grade: null,
    genreId: null
  });

  const { loading, error, data } = useQuery<{ diary: DiaryYear }>(QUERY_DIARY, {
    variables: { filters },
    context: {
      headers: {
        authorization: 'Bearer ' + jwtToken
      }
    }
  });

  const refetchNextYear = () => {
    setCurrentYear(currentYear + 1);
    setFilters({ ...filters, year: currentYear + 1 });
  };

  const refetchPreviousYear = () => {
    setCurrentYear(currentYear - 1);
    setFilters({ ...filters, year: currentYear - 1 });
  };

  if (loading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <ErrorText />;
  }

  return (
    <StyledDiary>
      <Flex justifyContent={'center'}>
        {currentYear - 1 >= MIN_YEAR ? (
          <StyledLink to={`../${currentYear - 1}`}>
            <Button margin={'auto 2rem auto 0'} onClick={refetchPreviousYear}>
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

        <StyledLink to={`../${currentYear + 1}`}>
          <Button margin={'auto 0 auto 2rem'} onClick={refetchNextYear}>
            <AccessibleIcon label="Next year">
              <NextIcon />
            </AccessibleIcon>
          </Button>
        </StyledLink>
      </Flex>
      {data?.diary.months.find((month) => month.days.length) ? (
        <Diary months={data.diary.months} />
      ) : (
        <NoData>No diary found. </NoData>
      )}
    </StyledDiary>
  );
};

export default DiaryPage;
