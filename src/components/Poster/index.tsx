import React from 'react';
import { StyledPoster, StyledPosterProps } from './style';

export type PosterProps = {
  posterUrl: string;
} & StyledPosterProps;

const Poster = ({ posterUrl, width }: PosterProps) => {
  return <StyledPoster src={posterUrl} width={width} />;
};

export default Poster;
