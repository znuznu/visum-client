import { HTTPError } from 'ky';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useSearchParams } from 'react-router-dom';
import Checkbox from '../../components/common/Checkbox';
import { Flex } from '../../components/common/Flex';
import { Grid } from '../../components/common/Grid';
import Input from '../../components/common/Input';
import Paginator from '../../components/common/Paginator';
import ErrorText from '../../components/ErrorText';
import { NoData } from '../../components/NoData';
import PosterTooltip from '../../components/PosterTooltip';
import useAuthentication from '../../hooks/useAuthentication';
import useGenericHttpError from '../../hooks/useGenericHttpError';
import { MovieFromPage } from '../../models/movies';
import { Page } from '../../models/page';
import { fetchPage } from '../../services/api/page';
import { StyledMovies, StyledOptions, StyledSearchBar } from './style';
import {
  SelectScrollUpButton,
  Select,
  SelectContent,
  SelectIcon,
  SelectValue,
  SelectViewport,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectItemText,
  SelectItemIndicator,
  SelectSeparator,
  SelectScrollDownButton,
  SelectTrigger
} from '../../components/common/Select';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '../../components/common/Select/style';
import { Label } from '../../components/common/Label';

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
  const [page, setPage] = useState<Page<MovieFromPage>>({
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
      return fetchPage<MovieFromPage>(
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

  if (isLoading) {
    // TODO spinner
    return <p>Loading</p>;
  }

  if (isError) {
    return <ErrorText />;
  }

  const handlePageChange = (page: Page<MovieFromPage>) => {
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
            <Select defaultValue="title,ASC" onValueChange={handleSelectChange}>
              <SelectTrigger aria-label="Sort by" id={'sort-by'}>
                <SelectValue />
                <SelectIcon>
                  <ChevronDownIcon />
                </SelectIcon>
              </SelectTrigger>
              <SelectContent>
                <SelectScrollUpButton>
                  <ChevronUpIcon />
                </SelectScrollUpButton>

                <SelectViewport>
                  <SelectGroup>
                    <SelectLabel>Title</SelectLabel>
                    <SelectItem value="title,ASC">
                      <SelectItemText>A-Z</SelectItemText>
                      <SelectItemIndicator>
                        <CheckIcon />
                      </SelectItemIndicator>
                    </SelectItem>
                    <SelectItem value="title,DESC">
                      <SelectItemText>Z-A</SelectItemText>
                      <SelectItemIndicator>
                        <CheckIcon />
                      </SelectItemIndicator>
                    </SelectItem>
                  </SelectGroup>

                  <SelectSeparator />

                  <SelectGroup>
                    <SelectLabel>Release date</SelectLabel>
                    <SelectItem value="releaseDate,ASC">
                      <SelectItemText>Oldest</SelectItemText>
                      <SelectItemIndicator>
                        <CheckIcon />
                      </SelectItemIndicator>
                    </SelectItem>
                    <SelectItem value="releaseDate,DESC">
                      <SelectItemText>Newest</SelectItemText>
                      <SelectItemIndicator>
                        <CheckIcon />
                      </SelectItemIndicator>
                    </SelectItem>
                  </SelectGroup>
                </SelectViewport>

                <SelectScrollDownButton>
                  <ChevronDownIcon />
                </SelectScrollDownButton>
              </SelectContent>
            </Select>
          </Flex>
        </StyledOptions>
      </StyledSearchBar>
      {data?.content.length ? (
        <>
          <Paginator page={data} onPageChange={handlePageChange} currentStartIndex={0} />
          <Grid gap={'0.5rem'} columnSize={'100px'} margin={'0.5rem 0 1.5rem'}>
            {data?.content.map((movie) => (
              <Link to={`/film/${movie.id}`} key={`movie-${movie.id}`}>
                <PosterTooltip
                  width={'100px'}
                  height={'150px'}
                  movie={{
                    title: movie.title,
                    posterUrl: movie.metadata.posterUrl,
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
      )}
    </StyledMovies>
  );
};

export default FilmsPage;
