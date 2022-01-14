import { HTTPError } from 'ky';
import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import useAuthentication from '../../hooks/useAuthentication';
import useGenericHttpError from '../../hooks/useGenericHttpError';
import { Movie } from '../../models/movies';
import { Review } from '../../models/reviews';
import { fetchMovie } from '../../services/api/movie';
import { deleteReview } from '../../services/api/review';
import { AccessibleIcon } from '../common/AccessibleIcon';
import { Flex } from '../common/Flex';
import ReadonlyReview from '../ReadonlyReview';
import ReviewForm from '../ReviewForm';
import {
  RemoveIcon,
  StyledTitle,
  EditIcon,
  CancelIcon,
  Edit2Icon,
  StyledNoReviewYet
} from './style';

interface EditableReviewProps {
  // The Movie ID of the one we want to handle the Review
  movieId: number;
}

const EditableReview = ({ movieId }: EditableReviewProps) => {
  const { jwtToken } = useAuthentication();
  const { setHttpError } = useGenericHttpError();
  const [review, setReview] = useState<Review | undefined>(undefined);
  const [isEdited, edited] = useState(false);

  const toggleEdit = () => edited(!isEdited);

  const { isLoading, isError } = useQuery(
    ['getMovieReview', isEdited],
    () => fetchMovie({ authorization: `Bearer ${jwtToken}` }, movieId),
    {
      onError: (error: HTTPError) => {
        setHttpError(error);
      },
      onSuccess: (data: Movie) => {
        setReview(data.review);
      }
    }
  );

  const deleteReviewMutation = useMutation(
    () => deleteReview({ authorization: `Bearer ${jwtToken}` }, review!.id.toString()),
    {
      onError: (error) => {
        // TODO #1
        console.log(error);
      },
      onSuccess: () => {
        setReview(undefined);
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
    <Flex flexDirection={'column'} margin={'0 0 1rem 0'}>
      <Flex justifyContent={'space-between'} margin={'0 0 0.8rem'}>
        <StyledTitle>Review</StyledTitle>
        <Flex>
          {isEdited ? (
            <AccessibleIcon label="Cancel edit">
              <CancelIcon onClick={toggleEdit} />
            </AccessibleIcon>
          ) : review ? (
            <Flex>
              <AccessibleIcon label="Edit the review">
                <EditIcon onClick={toggleEdit} />
              </AccessibleIcon>
              <AccessibleIcon label="Remove the review">
                <RemoveIcon onClick={() => deleteReviewMutation.mutate()} />
              </AccessibleIcon>
            </Flex>
          ) : (
            <AccessibleIcon label="Edit the review">
              <Edit2Icon onClick={toggleEdit} />
            </AccessibleIcon>
          )}
        </Flex>
      </Flex>
      {isEdited ? (
        <ReviewForm review={review} movieId={movieId} onComplete={toggleEdit} />
      ) : review ? (
        <ReadonlyReview review={review} />
      ) : (
        <StyledNoReviewYet>
          No review yet, click on the icon above to add one.
        </StyledNoReviewYet>
      )}
    </Flex>
  );
};

export default EditableReview;
