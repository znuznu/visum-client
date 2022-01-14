import React from 'react';
import { Flex } from '../common/Flex';
import MovieReviewPoster from '../MovieReviewPoster';
import { StyledFooter, StyledText } from '../ReadonlyReview/style';
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
  review: {
    id: number;
    grade: number;
    content: string;
    movie: {
      id: number;
      title: string;
      releaseDate: string;
      metadata: {
        posterUrl?: string;
      };
    };
    creationDate: string;
    updateDate: string;
  };
};

const PageReview = ({ review }: PageReviewProps) => {
  return (
    <StyledPageReview>
      <Flex>
        <MovieReviewPoster {...review.movie} />
        <StyledContent>
          <StyledHeader>
            <StyledHeaderLeft>
              <StyledTitle href={`/film/${review.movie.id}`}>
                {review.movie.title}
              </StyledTitle>
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
