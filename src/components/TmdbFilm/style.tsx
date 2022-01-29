import styled from 'styled-components';

const StyledResource = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props.theme.fontSizes.s};
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-weight: 900;

  &:hover {
    color: ${(props) => props.theme.colors.tmdb.primary};
    cursor: default;
  }
`;

const StyledLink = styled(StyledResource)`
  &:hover {
    color: ${(props) => props.theme.colors.tmdb.primary};
    cursor: pointer;
  }
`;

const StyledFilmTitle = styled.a`
  color: ${(props) => props.theme.colors.tmdb.primary};
  font-family: ${(props) => props.theme.fonts.logo};
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: bold;
  margin: 0;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.tmdb.primary};
  }

  &:visited {
    color: ${(props) => props.theme.colors.tmdb.primary};
  }
`;

const StyledCheckboxes = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.s}) {
    flex-direction: column;

    & > div:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }
`;

export { StyledResource, StyledLink, StyledFilmTitle, StyledCheckboxes };
