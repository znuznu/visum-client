import { HTTPError } from 'ky';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Checkbox from '../../components/common/Checkbox';
import { Grid } from '../../components/common/Grid';
import Input from '../../components/common/Input';
import Paginator from '../../components/common/Paginator';
import MoviePoster from '../../components/MoviePoster';
import { API_URL } from '../../config';
import useAuthentication from '../../hooks/useAuthentication';
import useGenericHttpError from '../../hooks/useGenericHttpError';
import { MovieFromPage } from '../../models/movies';
import { Page } from '../../models/page';
import HttpService from '../../services/http';
import { StyledMovies, StyledOptions, StyledSearchBar } from './style';

const buildSearchQuery = (title: string, isFavorite: boolean, isToWatch: boolean) => {
  let query = `title=%${title}%`;

  if (isFavorite) {
    query += '*isFavorite==true';
  }

  if (isToWatch) {
    query += '*shouldWatch==true';
  }

  return query;
};

// TODO move outside here when a new components needs it
interface PageSearchParams {
  sort: string;
  search: string;
  limit: number;
  offset: number;
}

// TODO move outside here when a new components needs it
const fetchPage = async <T extends unknown>(
  resource: string,
  headers: Record<string, string>,
  params: PageSearchParams
): Promise<Page<T>> => {
  return HttpService.get(`${API_URL}/api/${resource}`, {
    headers,
    searchParams: {
      sort: params.sort,
      search: params.search,
      limit: params.limit.toString(),
      offset: params.offset.toString()
    }
  }).json<Page<T>>();
};

const Films = () => {
  const { jwtToken } = useAuthentication();
  const { setHttpError } = useGenericHttpError(undefined);
  const [page, setPage] = useState<Page<MovieFromPage>>({
    current: 0,
    size: 25,
    totalElements: 0,
    totalPages: 0,
    first: true,
    last: true,
    content: []
  });
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState('');
  const [isFavorite, favorite] = useState(false);
  const [isToWatch, toWatch] = useState(false);

  const { isLoading, isError, data } = useQuery(
    ['getMovies', page.current, search, isFavorite, isToWatch],
    () =>
      fetchPage<MovieFromPage>(
        'movies',
        { authorization: `Bearer ${jwtToken}` },
        {
          sort: 'releaseDate,DESC',
          search: buildSearchQuery(search, isFavorite, isToWatch),
          limit: 30,
          offset: offset
        }
      ),
    {
      onError: (error: HTTPError) => {
        setHttpError(error);
      },
      retry: false,
      keepPreviousData: true
    }
  );

  if (isLoading) {
    // TODO spinner
    return <p>Loading</p>;
  }

  if (isError) {
    // TODO style
    return <p>Something wrent wrong. Please reload.</p>;
  }

  const handlePageChange = (page: Page<MovieFromPage>) => {
    setPage(page);
    setOffset(page.size * page.current);
  };

  return (
    <StyledMovies>
      <StyledSearchBar>
        <Input
          id={'Search'}
          type={'text'}
          placeholder={'Film title...'}
          value={search}
          onInput={(e) => {
            setOffset(0);
            setSearch(`${(e.target as HTMLTextAreaElement).value}`);
          }}
        />
        <StyledOptions>
          <Checkbox
            onClick={() => {
              setOffset(0);
              favorite(!isFavorite);
            }}
            ariaLabel={'Favorite film'}
            id={'favorite'}
            label={'Favorite'}
          />
          <Checkbox
            onClick={() => {
              setOffset(0);
              toWatch(!isToWatch);
            }}
            ariaLabel={'Film to watch'}
            id={'toWatch'}
            label={'To watch'}
            margin={'0 0 0 0.6rem'}
          />
        </StyledOptions>
      </StyledSearchBar>
      {data?.content.length ? (
        <>
          <Paginator page={data} onPageChange={handlePageChange} />
          <Grid gap={'0.5rem'} columnSize={'100px'} margin={'0.5rem 0 1.5rem'}>
            {data?.content.map((movie) => (
              <MoviePoster key={`recent-movie-${movie.id}`} {...movie} />
            ))}
          </Grid>
        </>
      ) : (
        // TODO style
        <p>No movies found.</p>
      )}
    </StyledMovies>
  );
};

export default Films;
