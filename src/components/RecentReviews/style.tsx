import styled from 'styled-components';

const StyledRecentReviews = styled.div``;

const StyledTitle = styled.h2`
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.main};
`;

const StyledReviews = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  width: 800px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.l}) {
    width: auto;
  }
`;

export { StyledTitle, StyledRecentReviews, StyledReviews };
