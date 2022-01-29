import { HTTPError } from 'ky';
import React, { Fragment, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Input from '../../components/common/Input';
import Paginator from '../../components/common/Paginator';
import { Separator } from '../../components/common/Separator';
import ErrorText from '../../components/ErrorText';
import { NoData } from '../../components/NoData';
import useAuthentication from '../../hooks/useAuthentication';
import useGenericHttpError from '../../hooks/useGenericHttpError';
import { Page } from '../../models/page';
import { PageActor } from '../../models/person';
import { fetchPage } from '../../services/api/page';
import { StyledPerson, StyledPersons, StyledSearchBar } from './style';

const buildSearchQuery = (search: string) => {
  return `name=%${search}%,forename=%${search}%`;
};

const ActorsPage = () => {
  const { jwtToken } = useAuthentication();
  const { setHttpError } = useGenericHttpError(undefined);
  const [page, setPage] = useState<Page<PageActor>>({
    current: 0,
    size: 30,
    totalElements: 0,
    totalPages: 0,
    first: true,
    last: true,
    content: []
  });
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState('');

  const { isLoading, isError, data } = useQuery(
    ['getActors', page.current, search],
    () =>
      fetchPage<PageActor>(
        'actors',
        { authorization: `Bearer ${jwtToken}` },
        {
          sort: 'name,ASC',
          search: buildSearchQuery(search),
          limit: 30,
          offset: offset
        }
      ),
    {
      onError: (error: HTTPError) => {
        // TODO
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

  const handlePageChange = (page: Page<PageActor>) => {
    setPage(page);
    setOffset(page.size * page.current);
  };

  return (
    <StyledPersons>
      <StyledSearchBar>
        <Input
          id={'Search'}
          type={'text'}
          placeholder={'Name or forename...'}
          value={search}
          onInput={(e) => {
            setOffset(0);
            setSearch(`${(e.target as HTMLTextAreaElement).value}`);
          }}
        />
      </StyledSearchBar>
      {data?.content.length ? (
        <>
          <Paginator page={data} onPageChange={handlePageChange} currentStartIndex={0} />
          {data.content.map((person, index) => {
            return (
              <Fragment key={`actor-${person.id}`}>
                <Link to={`${person.id}`}>
                  <StyledPerson>
                    {person.name} {person.forename}
                  </StyledPerson>
                </Link>
                {index !== data.content.length - 1 ? <Separator decorative /> : null}
              </Fragment>
            );
          })}
        </>
      ) : (
        <NoData>No persons found.</NoData>
      )}
    </StyledPersons>
  );
};

export default ActorsPage;
