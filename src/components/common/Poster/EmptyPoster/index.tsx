import { AccessibleIcon } from 'components/primitives/AccessibleIcon';

import { EmptyPosterStyleProps, StyledEmptyPoster, StyledNoPosterIcon } from './style';

export type EmptyPosterProps = EmptyPosterStyleProps & {
  iconSize: string;
};

const EmptyPoster = ({ width, height, iconSize }: EmptyPosterProps) => {
  return (
    <StyledEmptyPoster width={width} height={height}>
      <AccessibleIcon label="No film poster">
        <StyledNoPosterIcon $iconSize={iconSize} />
      </AccessibleIcon>
    </StyledEmptyPoster>
  );
};

export default EmptyPoster;
