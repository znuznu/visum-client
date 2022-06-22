import { Formik } from 'formik';
import { useMutation } from 'react-query';

import { Review } from 'models/reviews';

import {
  CreateReviewRequest,
  UpdateReviewRequest,
  createReview,
  updateReview
} from 'services/api/review';

import useAuthentication from 'hooks/useAuthentication';

import Button from 'components/primitives/Button';
import Input from 'components/primitives/Input';
import TextArea from 'components/primitives/TextArea';
import { StyledForm } from 'components/sign/SignBox/SignInForm/style';

import { validate } from './validate';

export interface FormValues {
  grade: number;
  content: string;
}

interface ReviewFormProps {
  review?: Review | null;
  movieId: number;
  onComplete: () => void;
}

const ReviewForm = ({ review, movieId, onComplete }: ReviewFormProps) => {
  const auth = useAuthentication();

  const createReviewMutation = useMutation(
    (body: CreateReviewRequest) =>
      createReview({ authorization: `Bearer ${auth.jwtToken}` }, body),
    {
      onError: (error) => {
        // TODO #1
        console.log(error);
      },
      onSuccess: () => {
        onComplete();
      }
    }
  );

  const updateReviewMutation = useMutation(
    (body: UpdateReviewRequest) =>
      updateReview({ authorization: `Bearer ${auth.jwtToken}` }, body, review?.id!),
    {
      onError: (error) => {
        // TODO #1
        console.log(error);
      },
      onSuccess: () => {
        onComplete();
      }
    }
  );

  return (
    <Formik
      initialValues={{
        grade: review ? review.grade : 1,
        content: review ? review.content : ''
      }}
      validate={validate}
      onSubmit={(values: FormValues) => {
        review
          ? updateReviewMutation.mutate(values)
          : createReviewMutation.mutate({
              grade: values.grade,
              content: values.content,
              movieId
            });
      }}
    >
      {(props) => {
        return (
          <StyledForm onSubmit={props.handleSubmit}>
            <Input
              id={'grade'}
              label={'Grade'}
              type={'number'}
              error={
                props.touched.grade && props.errors.grade ? props.errors.grade : undefined
              }
              margin={'0 0 2rem 0'}
              min={0}
              max={10}
              name={'grade'}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.grade.toString()}
            />
            <TextArea
              id={'content'}
              label={'Content'}
              error={
                props.touched.content && props.errors.content
                  ? props.errors.content
                  : undefined
              }
              name={'content'}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.content}
            />
            <Button type={'submit'} margin={'1.5rem auto 0 auto'}>
              {'Add'}
            </Button>
          </StyledForm>
        );
      }}
    </Formik>
  );
};

export default ReviewForm;
