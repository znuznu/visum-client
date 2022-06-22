import { HTTPError } from 'ky';
import { useQuery } from 'react-query';
import { Fragment } from 'react';

import { ReviewFromPage } from 'models/reviews';

import { fetchPage } from 'services/api/page';

import useGenericHttpError from 'hooks/useGenericHttpError';
import useAuthentication from 'hooks/useAuthentication';

import PageReview from 'components/RecentReviews/PageReview';
import { Separator } from 'components/primitives/Separator';
import { NoData } from 'components/common/NoData';
import ErrorText from 'components/common/ErrorText';
import HomeSectionHeading from 'components/HomeSectionHeading';
import SkeletonRecentReview from 'components/RecentReviews/SkeletonRecentReview';

import { StyledReviews } from './style';

export type RecentReviewsProps = {
  limit: number;
};

const SKELETON_NUMBERS = 3;

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

  if (isError) {
    return <ErrorText />;
  }

  return (
    <div>
      {/* TODO MORE path */}
      <HomeSectionHeading title={'Recent reviews'} />
      {isLoading &&
        [...Array(SKELETON_NUMBERS)].map((_, index) => (
          <Fragment key={`skeleton-${index}`}>
            <SkeletonRecentReview />
            {index !== SKELETON_NUMBERS - 1 && <Separator />}
          </Fragment>
        ))}
      {!isLoading &&
        (data?.content.length ? (
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
        ))}
    </div>
  );
};

export default RecentReviews;
