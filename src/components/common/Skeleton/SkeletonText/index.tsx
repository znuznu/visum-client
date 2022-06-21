import Skeleton from 'components/common/Skeleton';
import { StyleProps } from 'components/system/system.types';

import { StyledSkeletonText } from './style';

type SkeletonTextProps = {
  lines: number;
  lineHeight?: string;
} & Pick<StyleProps, 'margin' | 'width'>;

const SkeletonText = ({ lines, lineHeight, margin, width }: SkeletonTextProps) => {
  return (
    <StyledSkeletonText margin={margin}>
      {[...Array(lines)].map((_, index) => (
        <Skeleton key={`skeleton-${index}`} width={width} height={lineHeight ?? '10px'} />
      ))}
    </StyledSkeletonText>
  );
};

export default SkeletonText;
