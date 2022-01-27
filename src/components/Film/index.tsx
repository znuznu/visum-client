import { HTTPError } from 'ky';
import React, { Fragment, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { Flex } from '../../components/common/Flex';
import { Separator } from '../../components/common/Separator';
import EditableReview from '../../components/EditableReview';
import EmptyPoster from '../../components/EmptyPoster';
import MovieActionsPanel from '../../components/MovieActionsPanel';
import useAuthentication from '../../hooks/useAuthentication';
import useGenericHttpError from '../../hooks/useGenericHttpError';
import { Movie } from '../../models/movies';
import { fetchMovie, updateMovie } from '../../services/api/movie';
import ErrorText from '../ErrorText';
import WatchDates from '../WatchDates';
import {
  StyledPeople,
  StyledLink,
  StyledMovieTitle,
  StyledOverview,
  StyledReleaseDate,
  StyledTagline,
  StyledSectionTitle,
  StyledMovieContent,
  StyledSectionContent,
  StyledSection,
  StyledDetailsTable,
  StyledDetailsBody,
  StyledDetailsRow,
  StyledDetailsData,
  StyledFilm,
  StyledResponsivePoster
} from './style';

const formatNumberWithSpace = (n: number): string => {
  if (n <= 0) {
    return n.toString();
  }

  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

interface FilmProps {
  movieId: number;
}

const Film = ({ movieId }: FilmProps) => {
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

  // TODO API not ready, we should probably expose 'favorite' and 'shouldWatch' endpoints
  // eslint-disable-next-line
  const updateMovieMutation = useMutation(
    () => updateMovie({ authorization: `Bearer ${jwtToken}` }, {}, movie!.id),
    {
      onSuccess: (data) => {
        // setMovie(data);
      },
      onError: (error: HTTPError) => {
        setHttpError(error);
      }
    }
  );

  if (isLoading) {
    // TODO spinner
    return <p>Loading</p>;
  }

  if (isError) {
    return <ErrorText />;
  }

  return (
    <StyledFilm>
      <div>
        {movie?.metadata?.posterUrl ? (
          <StyledResponsivePoster src={movie?.metadata.posterUrl} />
        ) : (
          <EmptyPoster width={'250px'} height={'375px'} iconSize={'50px'} />
        )}
        <MovieActionsPanel
          isFavorite={movie?.isFavorite!}
          isToWatch={movie?.isToWatch!}
          movieId={movie!.id}
          onFavorite={() => {}}
        />
      </div>
      <StyledMovieContent>
        <Flex>
          <StyledMovieTitle>{movie?.title}</StyledMovieTitle>
          <StyledReleaseDate>{movie?.releaseDate} </StyledReleaseDate>
        </Flex>
        <Flex>
          <StyledPeople>
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
          </StyledPeople>
        </Flex>
        <StyledTagline>{movie?.metadata.tagline}</StyledTagline>
        <StyledOverview>{movie?.metadata.overview}</StyledOverview>

        <Separator />

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

        <Separator />

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

        <Separator />

        <StyledSectionTitle>Watch dates</StyledSectionTitle>
        <WatchDates movieId={movieId} />

        <Separator />

        <StyledSection>
          <StyledSectionTitle>Details</StyledSectionTitle>
          <StyledDetailsTable>
            <StyledDetailsBody>
              <StyledDetailsRow>
                <StyledDetailsData>Budget</StyledDetailsData>
                <StyledDetailsData>
                  {formatNumberWithSpace(movie?.metadata.budget ?? 0)}$
                </StyledDetailsData>
              </StyledDetailsRow>
              <StyledDetailsRow>
                <StyledDetailsData>Revenue</StyledDetailsData>
                <StyledDetailsData>
                  {formatNumberWithSpace(movie?.metadata.revenue ?? 0)}$
                </StyledDetailsData>
              </StyledDetailsRow>
              <StyledDetailsRow>
                <StyledDetailsData>Runtime</StyledDetailsData>
                <StyledDetailsData>{movie?.metadata.runtime} min</StyledDetailsData>
              </StyledDetailsRow>
              <StyledDetailsRow>
                <StyledDetailsData>Language</StyledDetailsData>
                <StyledDetailsData>{movie?.metadata.originalLanguage}</StyledDetailsData>
              </StyledDetailsRow>
            </StyledDetailsBody>
          </StyledDetailsTable>
        </StyledSection>

        <Separator />

        {<EditableReview movieId={movie?.id!} />}
      </StyledMovieContent>
    </StyledFilm>
  );
};

export default Film;
