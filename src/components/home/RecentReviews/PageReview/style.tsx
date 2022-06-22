import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { StyledText as StyledReadonlyText } from 'components/films/Film/EditableReview/ReadonlyReview/style';

const StyledLink = styled(Link)`
  &:hover {
    cursor: pointer;
  }

  &:visited {
    color: ${(props) => {
      return props.theme.colors.primary;
    }};
  }
`;

const StyledTitle = styled.h2`
  color: ${(props) => props.theme.colors.secondary};
  font-family: ${(props) => props.theme.fonts.logo};
  font-size: ${(props) => props.theme.fontSizes.l};
`;

const StyledHeader = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  align-items: center;
`;

const StyledReleaseDate = styled.span`
  font-family: ${(props) => props.theme.fonts.main};
  margin: 0 0 0 0.5rem;
  color: ${(props) => props.theme.colors.tertiary};
  font-size: ${(props) => props.theme.fontSizes.s};
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  width: 100%;
`;

const StyledGrade = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.xxxl};
  font-family: ${(props) => props.theme.fonts.logo};
  margin: 0 0 0 1rem;
  float: right;
`;

const StyledText = styled(StyledReadonlyText)`
  white-space: unset;
`;

export {
  StyledContent,
  StyledHeader,
  StyledGrade,
  StyledLink,
  StyledReleaseDate,
  StyledTitle,
  StyledText
};
