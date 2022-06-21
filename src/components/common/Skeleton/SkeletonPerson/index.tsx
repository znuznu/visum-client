import { Flex } from 'components/common/Flex';

import Skeleton from '..';
import SkeletonDynamicPoster from '../SkeletonDynamicPoster';
import SkeletonText from '../SkeletonText';

import { StyledPersonMovies } from './style';

const SkeletonPerson = () => {
  return (
    <Flex>
      <div>
        <SkeletonDynamicPoster />
      </div>
      <StyledPersonMovies>
        <Skeleton height={'2.5rem'} margin={'0 0 1.5rem'} width={'16rem'} />
        <SkeletonText lines={3} width={'24rem'} lineHeight={'2rem'} />
      </StyledPersonMovies>
    </Flex>
  );
};

export default SkeletonPerson;
