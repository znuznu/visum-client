import React, { useState } from 'react';
import { Formik } from 'formik';
import { HTTPError } from 'ky';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { AccessibleIcon } from '../../components/common/AccessibleIcon';
import Button from '../../components/common/Button';

import { Grid } from '../../components/common/Grid';
import Input from '../../components/common/Input';
import Paginator from '../../components/common/Paginator';
import ErrorText from '../../components/ErrorText';
import { NoData } from '../../components/NoData';
import PosterTooltip from '../../components/PosterTooltip';
import useAuthentication from '../../hooks/useAuthentication';
import useGenericHttpError from '../../hooks/useGenericHttpError';
import { Page } from '../../models/page';
import { TmdbPageMovie } from '../../models/tmdb';
import { searchTmdbMovie } from '../../services/api/tmdb';
import { StyledDiscover, StyledForm, SearchIcon, StyledTitle } from './style';
import TmdbAttribution from '../../components/TmdbAttribution';
import UpcomingMovies from '../../components/UpcomingMovies';
import { Separator } from '../../components/common/Separator';

interface FormValues {
  search: string;
}

interface FormErrors {
  search?: string;
}

export const validate = (values: FormValues) => {
  const errors: FormErrors = {};

  if (!values.search.trim()) {
    errors.search = 'Required';
  }

  return errors;
};

const DiscoveryPage = () => {
  const { jwtToken } = useAuthentication();
  const { setHttpError } = useGenericHttpError(undefined);
  const [page, setPage] = useState<Page<TmdbPageMovie>>({
    current: 1,
    size: 20,
    totalElements: 0,
    totalPages: 0,
    first: true,
    last: true,
    content: []
  });
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState('');

  const { isLoading, isError, data } = useQuery(
    ['getTmdbMovies', page.current, search],
    () =>
      searchTmdbMovie(
        { authorization: `Bearer ${jwtToken}` },
        {
          pageNumber,
          search
        }
      ),
    {
      onError: (error: HTTPError) => {
        // TODO error
        setHttpError(error);
      },
      retry: false,
      keepPreviousData: true,
      enabled: search.length !== 0
    }
  );

  if (isError) {
    return <ErrorText />;
  }

  const handlePageChange = (page: Page<TmdbPageMovie>) => {
    setPage(page);
    setPageNumber(page.current);
  };

  return (
    <StyledDiscover>
      <StyledTitle>Explore</StyledTitle>
      <UpcomingMovies />
      <Separator decorative />
      <Formik
        initialValues={{
          search: ''
        }}
        validate={validate}
        onSubmit={(values: FormValues) => {
          setPageNumber(1);
          setSearch(values.search);
        }}
      >
        {(props) => {
          return (
            <StyledForm onSubmit={props.handleSubmit}>
              <Input
                id={'search'}
                type={'text'}
                placeholder={'Find out new films to add'}
                value={props.values.search}
                margin={'auto 0'}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
              />
              <Button type={'submit'} margin={'auto 0 auto 1rem'}>
                <AccessibleIcon label="Search">
                  <SearchIcon />
                </AccessibleIcon>
              </Button>
            </StyledForm>
          );
        }}
      </Formik>
      {isLoading && <p>Loading</p>}
      {data?.content.length ? (
        <>
          <Paginator page={data} onPageChange={handlePageChange} currentStartIndex={1} />
          <Grid gap={'0.5rem'} columnSize={'100px'} margin={'0.5rem 0 1.5rem'}>
            {data?.content.map((movie: TmdbPageMovie) => (
              <Link to={`/tmdb/film/${movie.tmdbId}`} key={`tmdb-film-${movie.tmdbId}`}>
                <PosterTooltip width={'100px'} height={'150px'} movie={movie} />
              </Link>
            ))}
          </Grid>
        </>
      ) : search.length !== 0 && !isLoading ? (
        <NoData>No films found.</NoData>
      ) : null}
      <TmdbAttribution />
    </StyledDiscover>
  );
};

export default DiscoveryPage;
