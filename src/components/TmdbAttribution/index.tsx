import React from 'react';
import { StyledAttribution, StyledLink } from './style';

const TmdbAttribution = () => {
  return (
    <StyledAttribution>
      Films data from{' '}
      <StyledLink
        href={'https://www.themoviedb.org/'}
        target="_blank"
        rel="noreferrer noopener"
      >
        TMDb
      </StyledLink>
    </StyledAttribution>
  );
};

export default TmdbAttribution;
