import styled from 'styled-components';

import { StyledSkeletonBackground } from 'components/primitives/Skeleton/style';

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

const StyledSkeletonPoster = styled(StyledSkeletonBackground)<SkeletonPosterStyleProps>`
  ${(props) => {
    return `
        width: ${skeletonVariantPxSize[props.variant].width};
        height: ${skeletonVariantPxSize[props.variant].height};
        `;
  }}
`;

export default StyledSkeletonPoster;
