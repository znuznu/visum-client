import styled from 'styled-components';

import { StyledSkeleton } from 'components/primitives/Skeleton/style';

const StyledSkeletonReview = styled.div`
  display: flex;
  width: 100%;
`;

const StyledReviewTitle = styled(StyledSkeleton)`
  width: 200px;
  height: 25px;
  margin: 0 0 1rem 0;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    width: 100%;
  }
`;

export { StyledSkeletonReview, StyledReviewTitle };
