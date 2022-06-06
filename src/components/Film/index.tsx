import { Fragment, useState } from 'react';
import { HTTPError } from 'ky';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router';

import { Movie } from 'models/movies';

import { fetchMovie } from 'services/api/movie';

import { Flex } from 'components/common/Flex';
import { Separator } from 'components/common/Separator';
import EditableReview from 'components/EditableReview';
import EmptyPoster from 'components/EmptyPoster';
import MovieActionsPanel from 'components/MovieActionsPanel';
import ErrorText from 'components/ErrorText';
import FilmDetails from 'components/FilmDetails';
import WatchDates from 'components/WatchDates';
import SkeletonFilm from 'components/SkeletonFilm';

import useGenericHttpError from 'hooks/useGenericHttpError';
import useAuthentication from 'hooks/useAuthentication';

import {
  StyledFilm,
  StyledLink,
  StyledMovieContent,
  StyledMovieTitle,
  StyledOverview,
  StyledPerson,
  StyledReleaseDate,
  StyledResponsivePoster,
  StyledSection,
  StyledSectionContent,
  StyledSectionTitle,
  StyledTagline
} from './style';

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
          <div>
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
          </div>
          <StyledMovieContent>
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

            <StyledSection>
              <StyledSectionTitle>Cast</StyledSectionTitle>
              <StyledSectionContent>
                {movie?.actors.map((actor, index) => {
                  return (
                    <Fragment key={`actor-${actor.id}`}>
                      <StyledLink to={`/actor/${actor.id}`}>
                        {`${actor.forename} ${actor.name}`}
                      </StyledLink>
                      {index === movie.actors.length - 1 ? '' : ', '}
                    </Fragment>
                  );
                })}
              </StyledSectionContent>
            </StyledSection>

            <Separator decorative />

            <StyledSection>
              <StyledSectionTitle>Genres</StyledSectionTitle>
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
          </StyledMovieContent>
        </>
      )}
    </StyledFilm>
  );
};

export default Film;
