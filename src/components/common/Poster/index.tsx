import { StyledPoster, StyledPosterProps } from './style';

export type PosterProps = {
  posterUrl: string;
} & StyledPosterProps;

const Poster = ({ posterUrl, width, height }: PosterProps) => {
  return <StyledPoster src={posterUrl} width={width} height={height} />;
};

export default Poster;
