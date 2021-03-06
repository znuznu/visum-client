import { HTTPError } from 'ky';
import { Fragment, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { Page } from 'models/page';
import { PageDirector } from 'models/person';

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

const DirectorsPage = () => {
  const { jwtToken } = useAuthentication();
  const { setHttpError } = useGenericHttpError(undefined);
  const [page, setPage] = useState<Page<PageDirector>>({
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
    ['getDirectors', page.current, search],
    () =>
      fetchPage<PageDirector>(
        'directors',
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

  const handlePageChange = (page: Page<PageDirector>) => {
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
              <Fragment key={`director-${person.id}`}>
                <Link to={`/director/${person.id}`}>
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

export default DirectorsPage;
