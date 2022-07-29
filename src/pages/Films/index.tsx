import { HTTPError } from 'ky';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useSearchParams } from 'react-router-dom';

import { PageMovie } from 'models/movies';
import { Page } from 'models/page';

import { fetchPage } from 'services/api/page';

import useGenericHttpError from 'hooks/useGenericHttpError';
import useAuthentication from 'hooks/useAuthentication';

import Checkbox from 'components/primitives/Checkbox';
import { Flex } from 'components/primitives/Flex';
import { Grid } from 'components/primitives/Grid';
import Input from 'components/primitives/Input';
import Paginator from 'components/primitives/Paginator';
import ErrorText from 'components/common/ErrorText';
import { NoData } from 'components/common/NoData';
import PosterTooltip from 'components/common/Poster/PosterTooltip';
import * as Select from 'components/primitives/Select';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from 'components/primitives/Select/style';
import { Label } from 'components/primitives/Label';
import SkeletonPosters from 'components/primitives/Skeleton/SkeletonPosters';

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

const FilmsPage = () => {
  const { jwtToken } = useAuthentication();
  const { setHttpError } = useGenericHttpError(undefined);
  const [page, setPage] = useState<Page<PageMovie>>({
    current: 0,
    size: 25,
    totalElements: 0,
    totalPages: 0,
    first: true,
    last: true,
    content: []
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('releaseDate,DESC');
  const [isFavorite, favorite] = useState(searchParams.get('isFavorite') === 'true');
  const [isToWatch, toWatch] = useState(searchParams.get('isToWatch') === 'true');

  const { isLoading, isError, data } = useQuery(
    ['getMovies', page.current, search, isFavorite, isToWatch, sort, offset],
    () => {
      return fetchPage<PageMovie>(
        'movies',
        { authorization: `Bearer ${jwtToken}` },
        {
          sort,
          search: buildSearchQuery(search, isFavorite, isToWatch),
          limit: 30,
          offset
        }
      );
    },
    {
      onError: (error: HTTPError) => {
        setHttpError(error);
      },
      retry: false,
      keepPreviousData: true
    }
  );

  if (isError) {
    return <ErrorText />;
  }

  const handlePageChange = (page: Page<PageMovie>) => {
    setPage(page);
    setSearchParams({
      isFavorite: String(isFavorite),
      isToWatch: String(isToWatch)
    });
    setOffset(page.size * page.current);
  };

  const handleSelectChange = (value: string) => {
    setSort(value);
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
            setSearchParams({
              isFavorite: String(isFavorite),
              isToWatch: String(isToWatch)
            });

            setOffset(0);
            setSearch(`${(e.target as HTMLTextAreaElement).value}`);
          }}
          margin={'auto 0'}
        />
        <StyledOptions>
          <Checkbox
            onClick={() => {
              setSearchParams({
                isFavorite: String(!isFavorite),
                isToWatch: String(isToWatch)
              });

              setOffset(0);
              favorite(!isFavorite);
            }}
            ariaLabel={'Favorite film'}
            id={'favorite'}
            label={'Favorite'}
            isChecked={isFavorite}
          />
          <Checkbox
            onClick={() => {
              setSearchParams({
                isFavorite: String(isFavorite),
                isToWatch: String(!isToWatch)
              });

              setOffset(0);
              toWatch(!isToWatch);
            }}
            ariaLabel={'Film to watch'}
            id={'toWatch'}
            label={'To watch'}
            isChecked={isToWatch}
          />
          <Flex>
            <Label margin={'auto 0.4rem auto 0'} htmlFor={'sort-by'}>
              Sort by
            </Label>
            <Select.Root defaultValue="title,ASC" onValueChange={handleSelectChange}>
              <Select.Trigger aria-label="Sort by" id={'sort-by'}>
                <Select.Value />
                <Select.Icon>
                  <ChevronDownIcon />
                </Select.Icon>
              </Select.Trigger>
              <Select.Content>
                <Select.ScrollUpButton>
                  <ChevronUpIcon />
                </Select.ScrollUpButton>

                <Select.Viewport>
                  <Select.Group>
                    <Select.Label>Title</Select.Label>
                    <Select.Item value="title,ASC">
                      <Select.ItemText>A-Z</Select.ItemText>
                      <Select.ItemIndicator>
                        <CheckIcon />
                      </Select.ItemIndicator>
                    </Select.Item>
                    <Select.Item value="title,DESC">
                      <Select.ItemText>Z-A</Select.ItemText>
                      <Select.ItemIndicator>
                        <CheckIcon />
                      </Select.ItemIndicator>
                    </Select.Item>
                  </Select.Group>

                  <Select.Separator />

                  <Select.Group>
                    <Select.Label>Release date</Select.Label>
                    <Select.Item value="releaseDate,ASC">
                      <Select.ItemText>Oldest</Select.ItemText>
                      <Select.ItemIndicator>
                        <CheckIcon />
                      </Select.ItemIndicator>
                    </Select.Item>
                    <Select.Item value="releaseDate,DESC">
                      <Select.ItemText>Newest</Select.ItemText>
                      <Select.ItemIndicator>
                        <CheckIcon />
                      </Select.ItemIndicator>
                    </Select.Item>
                  </Select.Group>
                </Select.Viewport>

                <Select.ScrollDownButton>
                  <ChevronDownIcon />
                </Select.ScrollDownButton>
              </Select.Content>
            </Select.Root>
          </Flex>
        </StyledOptions>
      </StyledSearchBar>
      {isLoading && (
        <SkeletonPosters elements={9} variant={'standard'} margin={'2rem 0 0'} />
      )}
      {!isLoading &&
        (data?.content.length ? (
          <>
            <Paginator
              page={data}
              onPageChange={handlePageChange}
              currentStartIndex={0}
            />
            <Grid gap={'0.5rem'} columnSize={'100px'} margin={'0.5rem 0 1.5rem'}>
              {data?.content.map((movie) => (
                <Link to={`/film/${movie.id}`} key={`movie-${movie.id}`}>
                  <PosterTooltip
                    width={'100px'}
                    height={'150px'}
                    movie={{
                      title: movie.title,
                      posterUrl: movie.posterUrl,
                      releaseDate: movie.releaseDate,
                      isFavorite: movie.isFavorite,
                      isToWatch: movie.isToWatch
                    }}
                    showMetadata
                  />
                </Link>
              ))}
            </Grid>
          </>
        ) : (
          <NoData>No films found.</NoData>
        ))}
    </StyledMovies>
  );
};

export default FilmsPage;
