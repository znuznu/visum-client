import { ReviewFromPage } from 'models/reviews';

import { Flex } from 'components/primitives/Flex';
import MovieReviewPoster from 'components/MovieReviewPoster';
import { StyledFooter, StyledText } from 'components/EditableReview/ReadonlyReview/style';

import {
  StyledContent,
  StyledGrade,
  StyledHeader,
  StyledHeaderLeft,
  StyledPageReview,
  StyledReleaseDate,
  StyledTitle
} from './style';

type PageReviewProps = {
  review: ReviewFromPage;
};

const PageReview = ({ review }: PageReviewProps) => {
  return (
    <StyledPageReview to={`/film/${review.movie.id}`}>
      <Flex>
        <MovieReviewPoster {...review.movie} />
        <StyledContent>
          <StyledHeader>
            <StyledHeaderLeft>
              <StyledTitle>{review.movie.title}</StyledTitle>
              <StyledReleaseDate>{review.movie.releaseDate}</StyledReleaseDate>
            </StyledHeaderLeft>
            <StyledGrade>{review.grade}</StyledGrade>
          </StyledHeader>
          <StyledText>{review.content}</StyledText>
          <StyledFooter>{review.updateDate}</StyledFooter>
        </StyledContent>
      </Flex>
    </StyledPageReview>
  );
};

export default PageReview;
