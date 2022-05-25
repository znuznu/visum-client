import { Flex } from '../common/Flex';

import { StyledMovieTitle, StyledPersonMovie, StyledReleaseDate } from './style';

interface PersonMovieProps {
  movie: {
    id: number;
    title: string;
    releaseDate: string;
    isToWatch: boolean;
    isFavorite: boolean;
  };
}

const PersonMovie = ({ movie }: PersonMovieProps) => {
  return (
    <StyledPersonMovie>
      <Flex>
        <StyledMovieTitle to={`/film/${movie.id}`}>{movie?.title}</StyledMovieTitle>
        <StyledReleaseDate>{movie?.releaseDate} </StyledReleaseDate>
      </Flex>
    </StyledPersonMovie>
  );
};

export default PersonMovie;
