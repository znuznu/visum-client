import styled from 'styled-components';

const StyledMovies = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.h2`
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.main};
`;

const StyledSearchBar = styled.form`
  display: flex;
  padding: 0 0 1.5rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
    flex-direction: column;
  }
`;

const StyledOptions = styled.div`
  display: flex;
  margin-left: 1rem;

  & > :not(:last-child) {
    margin-right: 1rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
    margin-top: 0.5rem;
    margin-left: 0;
  }
`;

export { StyledMovies, StyledTitle, StyledOptions, StyledSearchBar };
