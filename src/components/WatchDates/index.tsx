import { HTTPError } from 'ky/distribution/errors/HTTPError';
import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import useAuthentication from '../../hooks/useAuthentication';
import { WatchDate } from '../../models/watchDate';
import { deleteWatchDate, fetchWatchDates } from '../../services/api/history';
import { Flex } from '../common/Flex';
import ErrorText from '../ErrorText';
import { RemoveIcon, StyledNoWatchDates, StyledWatchDate } from './style';

interface WatchDatesProps {
  movieId: number;
}

const WatchDates = ({ movieId }: WatchDatesProps) => {
  const { jwtToken } = useAuthentication();
  const [watchDates, setWatchDates] = useState<WatchDate[] | undefined>(undefined);
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

  if (isLoading) {
    // TODO spinner
    return <p>Loading</p>;
  }

  if (isError) {
    return <ErrorText />;
  }

  return (
    <Flex flexDirection={'column'}>
      {watchDates?.length ? (
        watchDates?.map((watchDate, index) => {
          return (
            <Flex key={`watchDate-${watchDate.id}`}>
              <StyledWatchDate>{watchDate.viewingDate}</StyledWatchDate>
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
