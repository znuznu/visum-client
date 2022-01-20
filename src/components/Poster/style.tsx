import styled from 'styled-components';

export type StyledPosterProps = {
  width?: string;
  height?: string;
};

const StyledPoster = styled.img<StyledPosterProps>`
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 0 0 0 1px ${(props) => props.theme.colors.border.secondary};
  border-radius: 5px;
  width: ${(props) => props.width ?? '100%'};
  height: ${(props) => props.height ?? 'auto'};
`;

export { StyledPoster };
