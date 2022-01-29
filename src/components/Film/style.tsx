import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledPoster } from '../../components/Poster/style';

const StyledFilm = styled.div`
  display: flex;
  margin: 1rem 0 0 0;
  max-width: ${({ theme }) => theme.breakpoints.s};
`;

const StyledResponsivePoster = styled(StyledPoster).attrs((props) => ({
  width: props.width ?? '250px'
}))`
  width: ${(props) => props.width};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
    width: 100%;
  }
`;

const StyledMovieTitle = styled.h1`
  color: ${(props) => props.theme.colors.secondary};
  font-family: ${(props) => props.theme.fonts.logo};
  font-size: ${(props) => props.theme.fontSizes.xl};
  margin: 0;
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props.theme.fontSizes.s};
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-weight: 900;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const StyledReleaseDate = styled.p`
  color: ${(props) => props.theme.colors.tertiary};
  font-family: inherit;
  font-size: inherit;
  margin: auto 0 auto 0.5rem;
`;

const StyledPerson = styled.p`
  color: ${(props) => props.theme.colors.tertiary};
  font-family: inherit;
  font-size: inherit;
  white-space: pre-wrap;
`;

const StyledTagline = styled.span`
  color: ${(props) => props.theme.colors.tertiary};
  font-family: inherit;
  font-size: inherit;
  text-transform: uppercase;
`;

const StyledOverview = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-family: inherit;
  font-size: inherit;
`;

const StyledCast = styled.p`
  color: ${(props) => props.theme.colors.tertiary};
  font-family: inherit;
  font-size: inherit;
`;

const StyledSectionTitle = styled.h2`
  color: ${(props) => props.theme.colors.tertiary};
  font-family: inherit;
  font-size: inherit;
  text-transform: uppercase;
  margin: 0 0 0.2rem 0;
  padding: 0;
`;

const StyledSectionContent = styled.p`
  white-space: pre-wrap;
  margin: 0;
  padding: 0;
`;

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledMovieContent = styled.div`
  color: ${(props) => props.theme.colors.tertiary};
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props.theme.fontSizes.s};
  margin-left: 1rem;
`;

export {
  StyledFilm,
  StyledPerson,
  StyledMovieTitle,
  StyledLink,
  StyledReleaseDate,
  StyledTagline,
  StyledOverview,
  StyledCast,
  StyledSectionTitle,
  StyledMovieContent,
  StyledSectionContent,
  StyledSection,
  StyledResponsivePoster
};
