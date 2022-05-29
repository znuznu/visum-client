import styled from 'styled-components';

export type SkeletonPosterVariant = 'standard' | 'small';
export type SkeletonPosterStyleProps = { variant: SkeletonPosterVariant };

const skeletonVariantPxSize = {
  small: {
    width: '80px',
    height: '120px'
  },
  standard: {
    width: '100px',
    height: '150px'
  }
};

const StyledSkeletonPoster = styled.div<SkeletonPosterStyleProps>`
  ${(props) => `
        width: ${skeletonVariantPxSize[props.variant].width};
        height: ${skeletonVariantPxSize[props.variant].height};
    `}

  background-color: ${(props) => props.theme.colors.skeleton.bg};
  border-radius: 4px;

  animation: fadeIn ease-out 0.8s;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  @keyframes fadeIn {
    0% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default StyledSkeletonPoster;
