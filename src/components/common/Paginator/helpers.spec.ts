import { expect, test } from 'vitest';
import { getPageRangeLabel } from './helpers';

test('Paginator helpers', () => {
  test('#getPageRangeLabel', () => {
    test('with current index starting at 0', () => {
      const startIndex = 0;

      test('when the page is the first one', () => {
        it('should return page starting with one', () => {
          expect(
            getPageRangeLabel(
              {
                current: 0,
                size: 30,
                totalElements: 97,
                totalPages: 4,
                first: true,
                last: false,
                content: [...Array.from({ length: 30 }, (_, i) => i + 1)]
              },
              startIndex
            )
          ).toEqual('1 - 30 of 97');
        });
      });

      test('when the page is not a first or last one', () => {
        it('should return page according to the offset', () => {
          expect(
            getPageRangeLabel(
              {
                current: 1,
                size: 30,
                totalElements: 97,
                totalPages: 4,
                first: false,
                last: false,
                content: [...Array.from({ length: 30 }, (_, i) => i + 1)]
              },
              startIndex
            )
          ).toEqual('31 - 60 of 97');
        });
      });

      test('when the page is the last one', () => {
        it('should return label with the rest', () => {
          expect(
            getPageRangeLabel(
              {
                current: 3,
                size: 30,
                totalElements: 97,
                totalPages: 4,
                first: false,
                last: true,
                content: [...Array.from({ length: 7 }, (_, i) => i + 1)]
              },
              startIndex
            )
          ).toEqual('91 - 97 of 97');
        });
      });

      test('when the page is empty', () => {
        it('should return the empty label', () => {
          expect(
            getPageRangeLabel(
              {
                current: 0,
                size: 0,
                totalElements: 0,
                totalPages: 0,
                first: true,
                last: true,
                content: []
              },
              startIndex
            )
          ).toEqual('0 - 0 of 0');
        });
      });
    });

    test('with current index starting at 1', () => {
      const startIndex = 1;

      test('when the page is the first one', () => {
        it('should return page starting with one', () => {
          expect(
            getPageRangeLabel(
              {
                current: 1,
                size: 20,
                totalElements: 134,
                totalPages: 7,
                first: true,
                last: false,
                content: [...Array.from({ length: 20 }, (_, i) => i + 1)]
              },
              startIndex
            )
          ).toEqual('1 - 20 of 134');
        });
      });

      test('when the page is not a first or last one', () => {
        it('should return page according to the offset', () => {
          expect(
            getPageRangeLabel(
              {
                current: 2,
                size: 20,
                totalElements: 134,
                totalPages: 7,
                first: false,
                last: false,
                content: [...Array.from({ length: 20 }, (_, i) => i + 1)]
              },
              startIndex
            )
          ).toEqual('21 - 40 of 134');
        });
      });

      test('when the page is the last one', () => {
        it('should return label with the rest', () => {
          expect(
            getPageRangeLabel(
              {
                current: 7,
                size: 20,
                totalElements: 134,
                totalPages: 7,
                first: false,
                last: true,
                content: [...Array.from({ length: 14 }, (_, i) => i + 1)]
              },
              startIndex
            )
          ).toEqual('121 - 134 of 134');
        });
      });

      test('when the page is empty', () => {
        it('should return the empty label', () => {
          expect(
            getPageRangeLabel(
              {
                current: 1,
                size: 0,
                totalElements: 0,
                totalPages: 0,
                first: true,
                last: true,
                content: []
              },
              startIndex
            )
          ).toEqual('0 - 0 of 0');
        });
      });
    });
  });
});

export {};
