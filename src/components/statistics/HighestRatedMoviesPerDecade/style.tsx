import styled from 'styled-components';

const StyledYear = styled.h2`
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.logo};
  font-size: ${(props) => props.theme.fontSizes.xxl};
  font-weight: bold;
  margin: 0 0 0.5rem 0;
`;

const StyledDecade = styled.div`
  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

export { StyledDecade, StyledYear };
