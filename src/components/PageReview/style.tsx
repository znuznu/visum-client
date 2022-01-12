import styled from 'styled-components';

const StyledPageReview = styled.div``;

const StyledTitle = styled.a`
  color: ${(props) => props.theme.colors.secondary};
  font-family: ${(props) => props.theme.fonts.logo};
  font-size: ${(props) => props.theme.fontSizes.l};

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }

  &:visited {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledHeaderLeft = styled.div`
  display: flex;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    flex-direction: column;
  }
`;

const StyledReleaseDate = styled.span`
  font-family: ${(props) => props.theme.fonts.main};
  margin: 0 0 0 0.5rem;
  color: ${(props) => props.theme.colors.tertiary};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    margin: 0;
  }
`;

const StyledText = styled.p`
  font-family: ${(props) => props.theme.fonts.main};
  margin: 1rem 0;
  white-space: pre-wrap;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  width: 100%;
`;

const StyledFooter = styled.p`
  color: ${(props) => props.theme.colors.tertiary};
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props.theme.fontSizes.xs};
  margin: auto 0 0 auto;
`;

const StyledGrade = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-size: 48px;
  font-family: ${(props) => props.theme.fonts.logo};
  margin: 0 0 0 1rem;
`;

export {
  StyledContent,
  StyledHeader,
  StyledHeaderLeft,
  StyledFooter,
  StyledGrade,
  StyledPageReview,
  StyledReleaseDate,
  StyledText,
  StyledTitle
};
