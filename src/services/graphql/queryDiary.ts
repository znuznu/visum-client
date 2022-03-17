import { gql } from '@apollo/client';

export const QUERY_DIARY = gql`
  query Diary($filters: DiaryFiltersInput!) {
    diary(filters: $filters) {
      year
      months {
        month
        days {
          day
          movie {
            id
            posterUrl
            title
            grade
            isFavorite
            isRewatch
            releaseDate
            reviewId
          }
        }
      }
    }
  }
`;
