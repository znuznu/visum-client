import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';

import { WatchDate } from 'models/watchDate';

import { addWatchDate, deleteWatchDate, fetchWatchDates } from 'services/api/history';

import useAuthentication from 'hooks/useAuthentication';

import { AccessibleIcon } from 'components/primitives/AccessibleIcon';
import Button from 'components/primitives/Button';
import { Flex } from 'components/primitives/Flex';
import ErrorText from 'components/common/ErrorText';
import { StyledSectionTitle } from 'components/films/Film/style';

import { formatToVisumDate } from './helpers';
import { AddIcon, RemoveIcon, StyledNoWatchDates, StyledWatchDate } from './style';

interface WatchDatesProps {
  movieId: number;
}

const WatchDates = ({ movieId }: WatchDatesProps) => {
  const { jwtToken } = useAuthentication();
  const [watchDates, setWatchDates] = useState<WatchDate[]>([]);
  const { isLoading, isError } = useQuery(
    'getWatchDates',
    () => fetchWatchDates({ authorization: `Bearer ${jwtToken}` }, movieId),
    {
      onSuccess: (data: WatchDate[]) => {
        setWatchDates(data);
      },
      onError: () => {
        // TODO
      }
    }
  );

  const deleteMutation = useMutation(
    'deleteWatchDate',
    ({ watchDateId }: { watchDateId: number; index: number }) =>
      deleteWatchDate({ authorization: `Bearer ${jwtToken}` }, watchDateId),
    {
      onSuccess: (_, values) => {
        setWatchDates(watchDates?.filter((_, index) => index !== values.index));
      },
      onError: () => {
        // TODO
      }
    }
  );

  const addMutation = useMutation(
    'addMutation',
    // TODO Date type for viewingDate
    ({ viewingDate }: { viewingDate: string }) =>
      addWatchDate({ authorization: `Bearer ${jwtToken}` }, { movieId, viewingDate }),
    {
      onSuccess: (data: WatchDate) => {
        setWatchDates([...watchDates, data]);
      },
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
    <Flex flexDirection={'column'}>
      <Flex justifyContent={'space-between'}>
        <StyledSectionTitle>Watch dates</StyledSectionTitle>
        <Button
          onClick={() => {
            addMutation.mutate({ viewingDate: formatToVisumDate(new Date()) });
          }}
          margin={'0 0 0 auto'}
          variant={'ghost'}
        >
          <AccessibleIcon label="Add date">
            <AddIcon />
          </AccessibleIcon>
        </Button>
      </Flex>
      {watchDates.length ? (
        watchDates.map((watchDate, index) => {
          return (
            <Flex key={`watchDate-${watchDate.id}`}>
              <StyledWatchDate>
                {watchDate.viewingDate
                  ? new Intl.DateTimeFormat('locale', { dateStyle: 'full' }).format(
                      new Date(watchDate.viewingDate)
                    )
                  : 'No date'}{' '}
              </StyledWatchDate>
              <Button
                onClick={() => {
                  deleteMutation.mutate({ watchDateId: watchDate.id, index });
                }}
                margin={'0 0 0 auto'}
                variant={'ghost'}
              >
                <AccessibleIcon label="Remove date">
                  <RemoveIcon />
                </AccessibleIcon>
              </Button>
            </Flex>
          );
        })
      ) : (
        <StyledNoWatchDates>No watch dates.</StyledNoWatchDates>
      )}
    </Flex>
  );
};

export default WatchDates;
