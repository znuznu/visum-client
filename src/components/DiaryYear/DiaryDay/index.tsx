import React from 'react';
import useWindowSize from '../../../hooks/useWindowSize';
import { S_BREAKPOINT_IN_PIXEL } from '../../../styles/theme/breakpoints';

import { Flex } from '../../common/Flex';
import Poster from '../../Poster';
import {
  FavoriteIcon,
  GradeIcon,
  ReviewIcon,
  RewatchIcon,
  StyledDay,
  StyledGrade,
  StyledNoData,
  StyledReleaseDate,
  StyledTableData,
  StyledTitle
} from './style';

type DiaryDayProps = {
  day: number;
  movieId: number;
  title: string;
  grade: number | null;
  isFavorite: boolean;
  isRewatch: boolean;
  posterUrl: string | null;
  releaseDate: string;
  reviewId: number | null;
};

const DiaryDay = ({
  day,
  movieId,
  title,
  grade,
  isFavorite,
  isRewatch,
  posterUrl,
  releaseDate,
  reviewId
}: DiaryDayProps) => {
  const windowSize = useWindowSize();

  return (
    <>
      <StyledDay>{day}</StyledDay>
      <StyledTableData>
        <Flex>
          {posterUrl && <Poster posterUrl={posterUrl} width={'50px'} height={'75px'} />}
          <StyledTitle to={`/film/${movieId}`}>{title}</StyledTitle>
        </Flex>
      </StyledTableData>

      {windowSize.width >= S_BREAKPOINT_IN_PIXEL && (
        <>
          <StyledReleaseDate>{new Date(releaseDate).getFullYear()}</StyledReleaseDate>
          {grade ? (
            <StyledGrade>
              <span>{grade}</span>
              <GradeIcon />
            </StyledGrade>
          ) : (
            <StyledNoData>-</StyledNoData>
          )}
          {isFavorite ? (
            <StyledTableData>
              <FavoriteIcon />
            </StyledTableData>
          ) : (
            <StyledNoData>-</StyledNoData>
          )}
          {isRewatch ? (
            <StyledTableData>
              <RewatchIcon />
            </StyledTableData>
          ) : (
            <StyledNoData>-</StyledNoData>
          )}
          {reviewId ? (
            <StyledTableData>
              <ReviewIcon />
            </StyledTableData>
          ) : (
            <StyledNoData>-</StyledNoData>
          )}
        </>
      )}
    </>
  );
};

export default DiaryDay;
