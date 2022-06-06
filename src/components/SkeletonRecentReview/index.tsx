import { Flex } from 'components/common/Flex';
import SkeletonPoster from 'components/common/Skeleton/SkeletonPoster';
import SkeletonText from 'components/common/Skeleton/SkeletonText';

import { StyledSkeletonReview, StyledReviewTitle } from './style';

const SkeletonReview = () => {
  return (
    <StyledSkeletonReview>
      <SkeletonPoster variant={'standard'} />
      <Flex flexDirection={'column'} margin={'0 0 0 1rem'} flex={'1'}>
        <StyledReviewTitle />
        <SkeletonText lines={5} />
      </Flex>
    </StyledSkeletonReview>
  );
};

export default SkeletonReview;
