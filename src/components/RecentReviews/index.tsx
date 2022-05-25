import { HTTPError } from 'ky';
import { useQuery } from 'react-query';
import useAuthentication from '../../hooks/useAuthentication';
import useGenericHttpError from '../../hooks/useGenericHttpError';
import { StyledReviews } from './style';
import { ReviewFromPage } from '../../models/reviews';
import PageReview from '../PageReview';
import { Separator } from '../common/Separator';
import { fetchPage } from '../../services/api/page';
import { NoData } from '../NoData';
import ErrorText from '../ErrorText';
import HomeSectionHeading from '../HomeSectionHeading';

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
