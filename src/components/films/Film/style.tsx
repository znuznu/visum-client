import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { StyledPoster } from 'components/common/Poster/style';

const StyledFilm = styled.div`
  display: flex;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
    flex-direction: column;
  }
`;

const StyledResponsivePoster = styled(StyledPoster).attrs((props) => ({
  width: props.width ?? '250px'
}))`
  width: ${(props) => props.width};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
    width: 250px;
  }
`;

const StyledMovieAssetContent = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
    margin: 0 auto;
    margin-bottom: 1rem;
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

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
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
  margin: 0.9rem 0;
`;

const StyledTagline = styled.span`
  color: ${(props) => props.theme.colors.tertiary};
  font-family: inherit;
  font-size: inherit;
  text-transform: uppercase;
  margin: 0.9rem 0;
`;

const StyledOverview = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-family: inherit;
  font-size: inherit;
  margin: 0.9rem 0 0;
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

const StyledMovieTextContent = styled.div`
  color: ${(props) => props.theme.colors.tertiary};
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props.theme.fontSizes.s};
  margin-left: 1rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
    margin-left: 0;
  }
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
  StyledMovieTextContent as StyledMovieContent,
  StyledSectionContent,
  StyledSection,
  StyledResponsivePoster,
  StyledMovieAssetContent
};
