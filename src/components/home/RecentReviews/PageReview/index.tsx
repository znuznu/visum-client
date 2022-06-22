import { ReviewFromPage } from 'models/reviews';

import { Flex } from 'components/primitives/Flex';
import ReviewPoster from 'components/home/RecentReviews/ReviewPoster';
import { StyledFooter } from 'components/films/Film/EditableReview/ReadonlyReview/style';

import {
  StyledContent,
  StyledGrade,
  StyledHeader,
  StyledLink,
  StyledReleaseDate,
  StyledTitle,
  StyledText
} from './style';

type PageReviewProps = {
  review: ReviewFromPage;
};

const PageReview = ({ review }: PageReviewProps) => {
  return (
    <Flex>
      <ReviewPoster {...review.movie} />
      <StyledContent>
        <StyledHeader>
          <StyledLink to={`/film/${review.movie.id}`}>
            <StyledTitle>{review.movie.title}</StyledTitle>
          </StyledLink>
          <StyledReleaseDate>{review.movie.releaseDate}</StyledReleaseDate>
        </StyledHeader>
        <div>
          <StyledGrade>{review.grade}</StyledGrade>
          <StyledText>{review.content}</StyledText>
        </div>
        <StyledFooter>{review.updateDate}</StyledFooter>
      </StyledContent>
    </Flex>
  );
};

export default PageReview;
