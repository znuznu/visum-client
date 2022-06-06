import styled from 'styled-components';

const StyledSkeletonFilm = styled.div`
  display: flex;
  margin: 1rem 0 0 0;
  width: 100%;
`;

const StyledSkeletonFilmContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  color: ${(props) => props.theme.colors.tertiary};
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props.theme.fontSizes.s};
  margin-left: 1rem;
`;

export { StyledSkeletonFilm, StyledSkeletonFilmContent };
