import { HTTPError } from 'ky/distribution/errors/HTTPError';
import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import useAuthentication from '../../hooks/useAuthentication';
import { WatchDate } from '../../models/watchDate';
import {
  addWatchDate,
  deleteWatchDate,
  fetchWatchDates
} from '../../services/api/history';
import { Flex } from '../common/Flex';
import ErrorText from '../ErrorText';
import { StyledSectionTitle } from '../Film/style';
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
      onError: (error: HTTPError) => {
        // TODO
      }
    }
  );

  const deleteMutation = useMutation(
    'deleteWatchDate',
    ({ watchDateId, index }: { watchDateId: number; index: number }) =>
      deleteWatchDate({ authorization: `Bearer ${jwtToken}` }, watchDateId),
    {
      onSuccess: (_, values) => {
        setWatchDates(watchDates?.filter((_, index) => index !== values.index));
      },
      onError: (error: HTTPError) => {
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
    return <ErrorText />;
  }

  return (
    <Flex flexDirection={'column'}>
      <Flex justifyContent={'space-between'}>
        <StyledSectionTitle>Watch dates</StyledSectionTitle>
        <AddIcon
          onClick={() => {
            addMutation.mutate({ viewingDate: formatToVisumDate(new Date()) });
          }}
        />
      </Flex>
      {watchDates.length ? (
        watchDates.map((watchDate, index) => {
          return (
            <Flex key={`watchDate-${watchDate.id}`}>
              <StyledWatchDate>{watchDate.viewingDate ?? 'No date'}</StyledWatchDate>
              <RemoveIcon
                onClick={() => {
                  deleteMutation.mutate({ watchDateId: watchDate.id, index });
                }}
              />
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
