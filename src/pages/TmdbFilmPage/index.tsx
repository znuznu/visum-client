import { useParams } from 'react-router-dom';

import TmdbFilm from 'components/TmdbFilm';

const invariant = (tmdbId?: string) => {
  if (!tmdbId) {
    throw new Error('TMDb id is undefined');
  }

  if (!Number.isInteger(parseInt(tmdbId))) {
    throw new Error('TMDb id is not an integer');
  }
};

const TmdbFilmPage = () => {
  const { tmdbId } = useParams<'tmdbId'>();

  // We could redirect the user to home
  invariant(tmdbId);

  return <TmdbFilm id={parseInt(tmdbId!)} />;
};

export default TmdbFilmPage;
