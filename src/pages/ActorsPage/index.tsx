import { Fragment, useState } from 'react';
import { HTTPError } from 'ky';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { Page } from 'models/page';
import { PageActor } from 'models/person';

import { fetchPage } from 'services/api/page';

import useAuthentication from 'hooks/useAuthentication';
import useGenericHttpError from 'hooks/useGenericHttpError';

import Input from 'components/primitives/Input';
import Paginator from 'components/primitives/Paginator';
import { Separator } from 'components/primitives/Separator';
import ErrorText from 'components/common/ErrorText';
import { NoData } from 'components/common/NoData';

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
          offset
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
                <Link to={`/actor/${person.id}`}>
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
