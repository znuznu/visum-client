import styled from 'styled-components';

const StyledDirector = styled.div`
  display: flex;
  margin: 1rem 0;
  width: auto;
`;

const StyledName = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.logo};
  font-size: ${(props) => props.theme.fontSizes.xl};
`;

const StyledContent = styled.div`
  display: flex;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
    flex-direction: column;

    & > *:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;

const StyledAssetContent = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
    margin: 0 auto;
  }
`;

const StyledMovies = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTextContent = styled.div`
  margin-left: 1rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
    margin-left: 0;
  }
`;

export {
  StyledDirector,
  StyledName,
  StyledContent,
  StyledAssetContent,
  StyledMovies,
  StyledTextContent
};
