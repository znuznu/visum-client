import { Fragment, useEffect, useState } from 'react';
import { HTTPError } from 'ky';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router';

import { TmdbMovie } from 'models/tmdb';

import { fetchTmdbMovie } from 'services/api/tmdb';
import {
  CreateMovieRequestBody,
  CreateMovieResponse,
  createMovie
} from 'services/api/movie';

import useGenericHttpError from 'hooks/useGenericHttpError';
import useAuthentication from 'hooks/useAuthentication';

import ErrorText from 'components/common/ErrorText';
import {
  StyledFilm,
  StyledMovieAssetContent,
  StyledMovieContent,
  StyledOverview,
  StyledPerson,
  StyledReleaseDate,
  StyledResponsivePoster,
  StyledSection,
  StyledSectionContent,
  StyledTagline
} from 'components/films/Film/style';
import EmptyPoster from 'components/common/Poster/EmptyPoster';
import { Flex } from 'components/primitives/Flex';
import { Separator } from 'components/primitives/Separator';
import FilmDetails from 'components/films/Film/FilmDetails';
import Checkbox from 'components/primitives/Checkbox';
import Button from 'components/primitives/Button';
import SkeletonFilm from 'components/films/Film/SkeletonFilm';
import { AccessibleIcon } from 'components/primitives/AccessibleIcon';
import { SectionHeader, SectionTitle } from 'components/films/Film/SectionHeader';

import {
  AddIcon,
  StyledCheckboxes,
  StyledFilmTitle,
  StyledLink,
  StyledResource
} from './style';

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
    (request: CreateMovieRequestBody) =>
      createMovie({ authorization: `Bearer ${jwtToken}` }, request),
    {
      onError: (error) => {
        // TODO #1
        console.log(error);
      },
      onSuccess: (data: CreateMovieResponse) => {
        setVisumId(data.id);
      }
    }
  );

  if (isError) {
    return <ErrorText />;
  }

  return (
    <StyledFilm>
      {isLoading ? (
        <SkeletonFilm withWatchDates={false} />
      ) : (
        <>
          <StyledMovieAssetContent>
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
                    tmdbId: movie.metadata.tmdbId,
                    isFavorite,
                    isToWatch
                  });
                }}
              >
                Add to Visum
                <AccessibleIcon label={'Logout'}>
                  <AddIcon />
                </AccessibleIcon>
              </Button>
            </Flex>
          </StyledMovieAssetContent>
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
              <SectionHeader>
                <SectionTitle title={'Cast'} />
              </SectionHeader>
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
              <SectionHeader>
                <SectionTitle title={'Genres'} />
              </SectionHeader>
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
      )}
    </StyledFilm>
  );
};

export default TmdbFilm;
