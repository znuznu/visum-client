import { Fragment, useEffect, useState } from 'react';
import { HTTPError } from 'ky';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router';

import { TmdbMovie } from 'models/tmdb';

import { fetchTmdbMovie } from 'services/api/tmdb';
import {
  CreateMovieRequestBody,
  CreateMovieResponseBody,
  createMovie
} from 'services/api/movie';

import ErrorText from 'components/ErrorText';
import {
  StyledMovieContent,
  StyledOverview,
  StyledPerson,
  StyledReleaseDate,
  StyledResponsivePoster,
  StyledSection,
  StyledSectionContent,
  StyledSectionTitle,
  StyledTagline
} from 'components/Film/style';
import EmptyPoster from 'components/EmptyPoster';
import { Flex } from 'components/common/Flex';
import { Separator } from 'components/common/Separator';
import FilmDetails from 'components/FilmDetails';
import Checkbox from 'components/common/Checkbox';
import Button from 'components/common/Button';
import SkeletonFilm from 'components/SkeletonFilm';

import useGenericHttpError from 'hooks/useGenericHttpError';
import useAuthentication from 'hooks/useAuthentication';

import { StyledCheckboxes, StyledFilmTitle, StyledLink, StyledResource } from './style';

const buildTmdbPersonUrl = ({
  id,
  name,
  forename
}: {
  id: number;
  name: string;
  forename: string;
}): string => {
  return `https://www.themoviedb.org/person/${id}-${forename}-${name}`;
};

const buildTmdbMovieUrl = ({ id, title }: { id: number; title: string }): string => {
  return `https://www.themoviedb.org/movie/${id}-${title}`;
};

const TmdbFilm = ({ id }: { id: number }) => {
  const navigate = useNavigate();
  const { jwtToken } = useAuthentication();
  const { setHttpError } = useGenericHttpError(undefined);
  const [movie, setMovie] = useState<TmdbMovie | undefined>(undefined);
  const [isFavorite, setFavorite] = useState(false);
  const [isToWatch, setToWatch] = useState(false);

  // Used to redirect the user to the newly created movie page
  const [visumId, setVisumId] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (visumId) {
      navigate(`/film/${visumId}`);
    }
  }, [visumId, navigate]);

  const toggleFavorite = () => {
    setFavorite(!isFavorite);
  };

  const toggleToWatch = () => {
    setToWatch(!isToWatch);
  };

  const { isLoading, isError } = useQuery(
    'getTmdbMovie',
    () => fetchTmdbMovie({ authorization: `Bearer ${jwtToken}` }, id),
    {
      onSuccess: (data: TmdbMovie) => {
        setMovie(data);
      },
      onError: (error: HTTPError) => {
        setHttpError(error);
      }
    }
  );

  const createMovieMutation = useMutation(
    (movie: CreateMovieRequestBody) =>
      createMovie({ authorization: `Bearer ${jwtToken}` }, movie),
    {
      onError: (error) => {
        // TODO #1
        console.log(error);
      },
      onSuccess: (data: CreateMovieResponseBody) => {
        setVisumId(data.id);
      }
    }
  );

  if (isError) {
    return <ErrorText />;
  }

  return isLoading ? (
    <SkeletonFilm withWatchDates={false} />
  ) : (
    <>
      <div>
        {movie?.metadata?.posterUrl ? (
          <StyledResponsivePoster src={movie?.metadata.posterUrl} />
        ) : (
          <EmptyPoster width={'250px'} height={'375px'} iconSize={'50px'} />
        )}
        <Flex
          flexDirection={'column'}
          justifyContent={'space-between'}
          margin={'1rem 0 0'}
        >
          <StyledCheckboxes>
            <Checkbox
              onClick={toggleFavorite}
              label={'Favorite'}
              ariaLabel={'Favorite'}
              id={'Favorite'}
            />
            <Checkbox
              onClick={toggleToWatch}
              label={'To watch'}
              ariaLabel={'To watch'}
              id={'To watch'}
            />
          </StyledCheckboxes>
          <Button
            margin={' 1rem auto 0'}
            onClick={() => {
              if (!movie) {
                throw new Error('Unexpected behavior: movie is undefined.');
              }

              createMovieMutation.mutate({
                title: movie.title,
                releaseDate: movie.releaseDate,
                actors: movie.actors.map((actor) => {
                  return { name: actor.name, forename: actor.forename };
                }),
                directors: movie.directors.map((director) => {
                  return { name: director.name, forename: director.forename };
                }),
                genres: movie.genres.map((genre) => {
                  return {
                    type: genre
                  };
                }),
                metadata: {
                  tmdbId: movie.metadata.tmdbId,
                  imdbId: movie.metadata.imdbId,
                  originalLanguage: movie.metadata.originalLanguage,
                  tagline: movie.metadata.tagline,
                  overview: movie.metadata.overview,
                  budget: movie.metadata.budget,
                  revenue: movie.metadata.revenue,
                  runtime: movie.metadata.runtime,
                  posterUrl: movie.metadata.posterUrl
                },
                isFavorite,
                isToWatch
              });
            }}
          >
            Add
          </Button>
        </Flex>
      </div>
      <StyledMovieContent>
        <Flex>
          <StyledFilmTitle
            href={buildTmdbMovieUrl({
              id: movie?.metadata.tmdbId!,
              title: movie?.title!
            })}
            target="_blank"
            rel="noreferrer noopener"
          >
            {movie?.title}
          </StyledFilmTitle>
          <StyledReleaseDate>{movie?.releaseDate} </StyledReleaseDate>
        </Flex>
        <Flex>
          <StyledPerson>
            directed by{' '}
            {movie?.directors.map((director, index) => {
              return (
                <Fragment key={`director-${director.id}`}>
                  <StyledLink
                    as="a"
                    href={buildTmdbPersonUrl({
                      id: director.id,
                      forename: director.forename,
                      name: director.name
                    })}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
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
                  <StyledLink
                    as="a"
                    href={buildTmdbPersonUrl({
                      id: actor.id,
                      forename: actor.forename,
                      name: actor.name
                    })}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
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
                <Fragment key={`genre-${genre}`}>
                  <StyledResource>{`${genre}`}</StyledResource>
                  {index === movie.genres.length - 1 ? '' : ', '}
                </Fragment>
              );
            })}
          </StyledSectionContent>
        </StyledSection>

        <Separator decorative />

        <FilmDetails
          runtimeInMinutes={movie?.metadata.runtime}
          originalLanguage={movie?.metadata.originalLanguage}
          revenue={movie?.metadata.revenue}
          budget={movie?.metadata.budget}
        />
      </StyledMovieContent>
    </>
  );
};

export default TmdbFilm;
