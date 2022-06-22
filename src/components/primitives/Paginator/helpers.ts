import { PaginatorPage } from '.';

export const getPageRangeLabel = (page: PaginatorPage, startIndex: number): string => {
  if (!page.totalElements) {
    return '0 - 0 of 0';
  }

  if (page.first) {
    return `1 - ${page.totalElements > page.size ? page.size : page.totalElements} of ${
      page.totalElements
    }`;
  }

  if (page.last) {
    return `${page.totalElements - page.content.length + 1} - ${page.totalElements} of ${
      page.totalElements
    }`;
  }

  if (startIndex) {
    return `${page.size * (page.current - 1) + 1} - ${page.current * page.size} of ${
      page.totalElements
    }`;
  }

  const upperBound = (page.current + 1) * page.size;

  return `${page.size * page.current + 1} - ${upperBound} of ${page.totalElements}`;
};
