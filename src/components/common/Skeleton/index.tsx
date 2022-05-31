import { SkeletonStyleProps, StyledSkeleton } from './style';

type SkeletonProps = SkeletonStyleProps;

const Skeleton = ({ width, height, margin }: SkeletonProps) => {
  return <StyledSkeleton width={width} height={height} margin={margin} />;
};

export default Skeleton;
