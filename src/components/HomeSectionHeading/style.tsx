import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Flex } from 'components/common/Flex';

const StyledRecentMovies = styled.div``;

const StyledTitle = styled.h2`
  color: ${(props) => props.theme.colors.tertiary};
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props.theme.fontSizes.m};
  text-transform: uppercase;
`;

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

const StyledHeading = styled(Flex)`
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.border.secondary};
  margin: 1rem 0 0.6rem;
  padding-bottom: 0.2rem;
`;

export { StyledTitle, StyledRecentMovies, StyledLink, StyledHeading };
