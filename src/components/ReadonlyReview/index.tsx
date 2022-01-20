import React from 'react';
import { Review } from '../../models/reviews';
import { StyledGrade } from './style';
import { StyledFooter, StyledText, StyledReadonlyReview } from './style';

interface ReadonlyReviewProps {
  review: Review;
}

const ReadonlyReview = ({ review }: ReadonlyReviewProps) => {
  return (
    <StyledReadonlyReview>
      <div>
        <StyledGrade>{review.grade}</StyledGrade>
        <StyledText>{review.content}</StyledText>
      </div>
      <StyledFooter>{review.updateDate}</StyledFooter>
    </StyledReadonlyReview>
  );
};

export default ReadonlyReview;
