import { HTTPError } from 'ky';
import { useQuery } from 'react-query';

import { ReviewFromPage } from 'models/reviews';

import { fetchPage } from 'services/api/page';

import PageReview from 'components/PageReview';
import { Separator } from 'components/common/Separator';
import { NoData } from 'components/NoData';
import ErrorText from 'components/ErrorText';
import HomeSectionHeading from 'components/HomeSectionHeading';

import useGenericHttpError from 'hooks/useGenericHttpError';
import useAuthentication from 'hooks/useAuthentication';

import { StyledReviews } from './style';

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
          limit,
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
    return <ErrorText />;
  }

  return (
    <div>
      {/* TODO MORE path */}
      <HomeSectionHeading title={'Recent reviews'} />
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
        <NoData>No recent reviews found.</NoData>
      )}
    </div>
  );
};

export default RecentReviews;
