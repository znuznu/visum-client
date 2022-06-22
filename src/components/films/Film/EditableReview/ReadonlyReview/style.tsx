import styled from 'styled-components';

const StyledReadonlyReview = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.primary};

  margin-bottom: 1rem;
`;

const StyledText = styled.p`
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props.theme.fontSizes.s};
  margin: 0 0 1rem;
  white-space: pre-wrap;
  text-align: justify;
`;

const StyledFooter = styled.p`
  color: ${(props) => props.theme.colors.tertiary};
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props.theme.fontSizes.xs};
  margin: auto 0 0 auto;
`;

const StyledGrade = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.xxxl};
  font-family: ${(props) => props.theme.fonts.logo};
  margin: 0 0 0.5rem 0.5rem;
  float: right;
`;

export { StyledReadonlyReview, StyledText, StyledFooter, StyledGrade };
