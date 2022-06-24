import styled from 'styled-components';

import { StyledSkeleton } from '../../../primitives/Skeleton/style';

const StyledSkeletonDynamicPoster = styled(StyledSkeleton)`
  width: 250px;
  height: 375px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
    width: 100px;
    height: 150px;
  }
`;

export { StyledSkeletonDynamicPoster };
