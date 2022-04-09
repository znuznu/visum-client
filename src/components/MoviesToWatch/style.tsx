import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledMoviesToWatch = styled.div``;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.tertiary};
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props.theme.fontSizes.s};
  margin: auto 0;
  text-transform: uppercase;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
  }
`;

const StyledTitle = styled.h2`
  color: ${(props) => props.theme.colors.tertiary};
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props.theme.fontSizes.m};
  text-transform: uppercase;
  margin: 0;
`;

export { StyledMoviesToWatch, StyledLink, StyledTitle };
