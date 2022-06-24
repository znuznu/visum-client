import SkeletonPoster from 'components/primitives/Skeleton/SkeletonPoster';

import Skeleton from '../../primitives/Skeleton';
import SkeletonText from '../../primitives/Skeleton/SkeletonText';
import { StyledAssetContent, StyledContent } from '../Director/style';

import { StyledPersonMovies } from './style';

const SkeletonPerson = () => {
  return (
    <StyledContent>
      <StyledAssetContent>
        <SkeletonPoster variant={'large'} />
      </StyledAssetContent>
      <StyledPersonMovies>
        <Skeleton height={'2.5rem'} margin={'0 0 1.5rem'} width={'16rem'} />
        <SkeletonText lines={3} width={'24rem'} lineHeight={'2rem'} />
      </StyledPersonMovies>
    </StyledContent>
  );
};

export default SkeletonPerson;
