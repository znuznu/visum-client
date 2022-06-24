import styled from 'styled-components';

import { StyledSkeletonBackground } from 'components/primitives/Skeleton/style';

export type SkeletonPosterVariant = 'small' | 'standard' | 'large';
export type SkeletonPosterStyleProps = { variant: SkeletonPosterVariant };

const skeletonVariantPxSize = {
  small: {
    width: '80px',
    height: '120px'
  },
  standard: {
    width: '100px',
    height: '150px'
  },
  large: {
    width: '250px',
    height: '375px'
  }
};

const StyledSkeletonPoster = styled(StyledSkeletonBackground)<SkeletonPosterStyleProps>`
  ${(props) => {
    return `
        width: ${skeletonVariantPxSize[props.variant].width};
        height: ${skeletonVariantPxSize[props.variant].height};
        `;
  }}
`;

export default StyledSkeletonPoster;
