import React from 'react';
import { AccessibleIcon } from '../common/AccessibleIcon';
import {
  EmptyPosterStyleProps,
  EmptyPosterIconStyleProps,
  StyledEmptyPoster,
  StyledNoPosterIcon
} from './style';

export type EmptyPosterProps = EmptyPosterStyleProps & EmptyPosterIconStyleProps;

const EmptyPoster = ({ width, height, iconSize }: EmptyPosterProps) => {
  return (
    <StyledEmptyPoster width={width} height={height}>
      <AccessibleIcon label="No film poster">
        <StyledNoPosterIcon iconSize={iconSize} />
      </AccessibleIcon>
    </StyledEmptyPoster>
  );
};

export default EmptyPoster;
