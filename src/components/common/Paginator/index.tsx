import { AccessibleIcon } from '@radix-ui/react-accessible-icon';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

import { Page } from 'models/page';

import Button from 'components/common/Button';

import { StyledPageSize, StyledPaginator, StyledRangeLabel } from './style';
import { getPageRangeLabel } from './helpers';

export type PaginatorPage = {
  // Current page, starting at 0
  current: number;
  // The number of requested elements per page
  size: number;
  // The number of total elements within all pages
  totalElements: number;
  // The total number of pages
  totalPages: number;
  // Whether this page is the first one
  first: boolean;
  // Whether this page is the last one
  last: boolean;
  // The page content
  content: any[];
};

type PaginatorProps = {
  page: PaginatorPage;
  onPageChange: (page: Page<any>) => void;
  currentStartIndex: number;
};

const Paginator = ({ page, onPageChange, currentStartIndex }: PaginatorProps) => {
  return (
    <StyledPaginator>
      <StyledPageSize>Items per page {page.size}</StyledPageSize>
      <StyledRangeLabel>{getPageRangeLabel(page, currentStartIndex)}</StyledRangeLabel>
      {
        <Button
          disabled={page.first}
          margin={'0'}
          onClick={() =>
            onPageChange({
              current: page.current - 1,
              size: page.size,
              totalElements: page.totalElements,
              totalPages: page.totalPages,
              first: page.current === 1,
              last: false,
              content: []
            })
          }
        >
          <AccessibleIcon label={'Previous page'}>
            <ChevronLeftIcon />
          </AccessibleIcon>
        </Button>
      }
      {
        <Button
          disabled={page.last}
          margin={'0 0 0 0.5rem'}
          onClick={() => {
            onPageChange({
              current: page.current + 1,
              size: page.size,
              totalElements: page.totalElements,
              totalPages: page.totalPages,
              first: false,
              last: page.current === page.totalPages - (currentStartIndex ? 0 : 1),
              content: []
            });
          }}
        >
          <AccessibleIcon label={'Next page'}>
            <ChevronRightIcon />
          </AccessibleIcon>
        </Button>
      }
    </StyledPaginator>
  );
};

export default Paginator;
