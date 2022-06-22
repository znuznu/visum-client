import StyledSkeletonPoster, { SkeletonPosterStyleProps } from './style';

type SkeletonPosterProps = SkeletonPosterStyleProps;

const SkeletonPoster = ({ variant }: SkeletonPosterProps) => {
  return <StyledSkeletonPoster variant={variant} />;
};

export default SkeletonPoster;
