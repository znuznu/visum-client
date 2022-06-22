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
      <StyledMovieTitle to={`/film/${movie.id}`}>{movie?.title}</StyledMovieTitle>
      <StyledReleaseDate>{movie?.releaseDate} </StyledReleaseDate>
    </StyledPersonMovie>
  );
};

export default PersonMovie;
