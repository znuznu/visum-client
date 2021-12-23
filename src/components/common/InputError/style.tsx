import styled from 'styled-components';

const StyledError = styled.div`
  color: ${(props) => props.theme.colors.status.error};
  margin: 0;
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props.theme.fontSizes.m};
  margin-top: 0.5rem;
`;

export default StyledError;
