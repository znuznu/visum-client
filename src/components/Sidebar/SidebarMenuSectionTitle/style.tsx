import styled from 'styled-components';

const StyledTitle = styled.h4`
  color: ${(props) => props.theme.colors.sidebar.title};
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-family: ${(props) => props.theme.fonts.main};
  padding-left: 1rem;
  margin: 0 0 0.5rem;
  text-transform: uppercase;
`;

export default StyledTitle;
