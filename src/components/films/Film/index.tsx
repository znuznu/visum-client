import { Fragment, useState } from 'react';
import { HTTPError } from 'ky';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router';

import { Movie } from 'models/movies';

import { fetchMovie } from 'services/api/movie';

import useGenericHttpError from 'hooks/useGenericHttpError';
import useAuthentication from 'hooks/useAuthentication';

import { Flex } from 'components/primitives/Flex';
import { Separator } from 'components/primitives/Separator';
import EditableReview from 'components/films/Film/EditableReview';
import EmptyPoster from 'components/common/Poster/EmptyPoster';
import MovieActionsPanel from 'components/films/Film/MovieActionsPanel';
import ErrorText from 'components/common/ErrorText';
import FilmDetails from 'components/films/Film/FilmDetails';
import WatchDates from 'components/films/Film/WatchDates';
import SkeletonFilm from 'components/films/Film/SkeletonFilm';

import {
  StyledFilm,
  StyledLink,
  StyledMovieAssetContent,
  StyledMovieContent as StyledMovieTextContent,
  StyledMovieTitle,
  StyledOverview,
  StyledPerson,
  StyledReleaseDate,
  StyledResponsivePoster,
  StyledSection,
  StyledSectionContent,
  StyledTagline
} from './style';
import Cast from './Cast';
import { SectionHeader, SectionTitle } from './SectionHeader';

interface FilmProps {
  movieId: number;
}

const Film = ({ movieId }: FilmProps) => {
  const navigate = useNavigate();
  const { jwtToken } = useAuthentication();
  const { setHttpError } = useGenericHttpError(undefined);
  const [movie, setMovie] = useState<Movie | undefined>(undefined);

  const { isLoading, isError } = useQuery(
    ['getMovie', movieId],
    () => fetchMovie({ authorization: `Bearer ${jwtToken}` }, movieId),
    {
      onSuccess: (data: Movie) => {
        setMovie(data);
      },
      onError: (error: HTTPError) => {
        setHttpError(error);
      }
    }
  );

  const redirectToFilmsPage = () => {
    navigate('/films');
  };

  if (isError) {
    return <ErrorText />;
  }

  return (
    <StyledFilm>
      {isLoading ? (
        <SkeletonFilm withWatchDates={true} />
      ) : (
        <>
          <StyledMovieAssetContent>
            {movie?.metadata?.posterUrl ? (
              <StyledResponsivePoster src={movie?.metadata.posterUrl} />
            ) : (
              <EmptyPoster width={'250px'} height={'375px'} iconSize={'50px'} />
            )}
            <MovieActionsPanel
              isFavorite={movie?.isFavorite!}
              isToWatch={movie?.isToWatch!}
              movieId={movie?.id!}
              onFavorite={() => {
                setMovie({ ...movie!, isFavorite: true });
              }}
              onRemoveFavorite={() => {
                setMovie({ ...movie!, isFavorite: false });
              }}
              onAddToWatchlist={() => {
                setMovie({ ...movie!, isToWatch: true });
              }}
              onRemoveFromWatchlist={() => {
                setMovie({ ...movie!, isToWatch: false });
              }}
              onDelete={redirectToFilmsPage}
            />
          </StyledMovieAssetContent>
          <StyledMovieTextContent>
            <Flex>
              <StyledMovieTitle>{movie?.title}</StyledMovieTitle>
              <StyledReleaseDate>{movie?.releaseDate} </StyledReleaseDate>
            </Flex>
            <Flex>
              <StyledPerson>
                directed by{' '}
                {movie?.directors.map((director, index) => {
                  return (
                    <Fragment key={`director-${director.id}`}>
                      <StyledLink to={`/director/${director.id}`}>
                        {`${director.forename} ${director.name}`}
                      </StyledLink>
                      {index === movie.directors.length - 1 ? '' : ', '}
                    </Fragment>
                  );
                })}
              </StyledPerson>
            </Flex>
            <StyledTagline>{movie?.metadata.tagline}</StyledTagline>
            <StyledOverview>{movie?.metadata.overview}</StyledOverview>

            <Separator decorative />

            {movie?.actors && <Cast actors={movie.actors} />}

            <Separator decorative />

            <StyledSection>
              <SectionHeader>
                <SectionTitle title={'Genres'} />
              </SectionHeader>
              <StyledSectionContent>
                {movie?.genres.map((genre, index) => {
                  return (
                    <Fragment key={`genre-${genre.id}`}>
                      <StyledLink to={`/genre/${genre.id}`}>{`${genre.type}`}</StyledLink>
                      {index === movie.genres.length - 1 ? '' : ', '}
                    </Fragment>
                  );
                })}
              </StyledSectionContent>
            </StyledSection>

            <Separator decorative />

            <WatchDates movieId={movieId} />

            <Separator decorative />

            <FilmDetails
              runtimeInMinutes={movie?.metadata.runtime}
              originalLanguage={movie?.metadata.originalLanguage}
              revenue={movie?.metadata.revenue}
              budget={movie?.metadata.budget}
            />

            <Separator decorative />

            <EditableReview movieId={movieId} />
          </StyledMovieTextContent>
        </>
      )}
    </StyledFilm>
  );
};

export default Film;
