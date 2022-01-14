import { EyeNoneIcon } from '@radix-ui/react-icons';
import styled from 'styled-components';

export type EmptyPosterStyleProps = {
  width: string;
  height: string;
};

export type EmptyPosterIconStyleProps = {
  iconSize: string;
};

const StyledEmptyPoster = styled.div.attrs<EmptyPosterStyleProps>((props) => ({
  width: props.width ?? '150px',
  height: props.height ?? '225px'
}))<EmptyPosterStyleProps>`
  background-color: ${(props) => props.theme.colors.main};
  border-radius: 5px;
  box-shadow: 0 0 0 1px ${(props) => props.theme.colors.border.secondary};
  display: flex;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

const StyledNoPosterIcon = styled(EyeNoneIcon).attrs<EmptyPosterIconStyleProps>(
  (props) => ({
    width: props.iconSize ?? '50px',
    height: props.iconSize ?? '50px'
  })
)<EmptyPosterIconStyleProps>`
  color: ${(props) => props.theme.colors.border.secondary};
  height: ${(props) => props.width};
  margin: auto;
  width: ${(props) => props.height};
`;

export { StyledEmptyPoster, StyledNoPosterIcon };
