import Skeleton from 'components/common/Skeleton';
import { StyleProps } from 'components/system/system.types';

import { StyledSkeletonText } from './style';

type SkeletonTextProps = {
  lines: number;
} & Pick<StyleProps, 'margin' | 'width'>;

const SkeletonText = ({ lines, margin, width }: SkeletonTextProps) => {
  return (
    <StyledSkeletonText margin={margin}>
      {[...Array(lines)].map((_, index) => (
        <Skeleton key={`skeleton-${index}`} width={width} height={'10px'} />
      ))}
    </StyledSkeletonText>
  );
};

export default SkeletonText;
