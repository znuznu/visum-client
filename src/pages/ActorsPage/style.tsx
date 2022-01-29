import styled from 'styled-components';

// Since both actors and directors pages are the same
// (for now), the style is the same

const StyledPersons = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  max-width: ${({ theme }) => theme.breakpoints.m};
`;

const StyledSearchBar = styled.form`
  display: flex;
  padding: 1rem 0 1.5rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
    flex-direction: column;
  }
`;

const StyledPerson = styled.span`
  color: ${(props) => props.theme.colors.tertiary};
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props.theme.fontSizes.m};

  :hover {
    color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
  }
`;

export { StyledPersons, StyledSearchBar, StyledPerson };
