import React from 'react';
import { HTTPError } from 'ky';
import { useQuery } from 'react-query';
import useAuthentication from '../../hooks/useAuthentication';
import useGenericHttpError from '../../hooks/useGenericHttpError';
import { StyledReviews, StyledRecentReviews } from './style';
import { ReviewFromPage } from '../../models/reviews';
import PageReview from '../PageReview';
import { Separator } from '../common/Separator';
import { StyledTitle } from '../RecentMovies/style';
import { fetchPage } from '../../services/api/page';

export type RecentReviewsProps = {
  limit: number;
};

const RecentReviews = ({ limit }: RecentReviewsProps) => {
  const { jwtToken } = useAuthentication();
  const { setHttpError } = useGenericHttpError(undefined);

  const { isLoading, isError, data } = useQuery(
    'getRecentReviews',
    () =>
      fetchPage<ReviewFromPage>(
        'reviews/movies',
        { Authorization: `Bearer ${jwtToken}` },
        {
          sort: 'updateDate,DESC',
          search: 'content=%%',
          limit: limit,
          offset: 0
        }
      ),
    {
      onError: (error: HTTPError) => {
        setHttpError(error);
      },
      retry: false
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
    <StyledRecentReviews>
      <StyledTitle>Recent reviews</StyledTitle>
      {data?.content.length ? (
        <StyledReviews>
          {data?.content.map((review, index) => (
            <li key={`recent-review-${review.id}`}>
              <PageReview key={`recent-review-${review.id}`} review={review} />
              {index !== data.content.length - 1 && <Separator />}
            </li>
          ))}
        </StyledReviews>
      ) : (
        // TODO style
        <p>No recent reviews.</p>
      )}
    </StyledRecentReviews>
  );
};

export default RecentReviews;
