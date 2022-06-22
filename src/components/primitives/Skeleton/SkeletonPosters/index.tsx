import { useState } from 'react';

import { Grid } from 'components/primitives/Grid';
import Skeleton from 'components/primitives/Skeleton/SkeletonPoster';
import { StyleProps } from 'components/system/system.types';

import { SkeletonPosterVariant } from '../SkeletonPoster/style';

type SkeletonPostersProps = {
  elements: number;
  variant?: SkeletonPosterVariant;
} & Pick<StyleProps, 'margin'>;

const variantToPxSize = {
  small: '80px',
  standard: '100px'
};

const SkeletonPosters = ({ elements, variant, margin }: SkeletonPostersProps) => {
  const [columnSize] = useState(variantToPxSize[variant ?? 'standard']);

  return (
    <Grid gap={'0.5rem'} columnSize={columnSize} margin={margin}>
      {[...Array(elements)].map((_, index) => (
        <Skeleton key={`skeleton-${index}`} variant={variant ?? 'standard'} />
      ))}
    </Grid>
  );
};

export default SkeletonPosters;
