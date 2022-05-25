import { useParams } from 'react-router-dom';

import Film from 'components/Film';

const invariant = (movieId?: string) => {
  if (!movieId) {
    throw new Error('Film id is undefined');
  }

  if (!Number.isInteger(parseInt(movieId))) {
    throw new Error('Film id is not an integer');
  }
};

const FilmPage = () => {
  const { movieId } = useParams();

  // We could redirect the user to home
  invariant(movieId);

  return <Film movieId={parseInt(movieId!)} />;
};

export default FilmPage;
