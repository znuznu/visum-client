import { EyeNoneIcon } from '@radix-ui/react-icons';
import styled from 'styled-components';

type StyledPosterProps = {
  width?: string;
};

const StyledPoster = styled.img<StyledPosterProps>`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  width: ${(props) => props.width ?? '100%'};
  box-shadow: 0 0 0 1px ${(props) => props.theme.colors.border.secondary};

  &:hover {
    box-shadow: 0 0 0 1px ${(props) => props.theme.colors.border.primary};
    cursor: pointer;
  }
`;

const StyledEmptyPoster = styled.div`
  background-color: ${(props) => props.theme.colors.main};
  border-radius: 5px;
  box-shadow: 0 0 0 1px ${(props) => props.theme.colors.border.secondary};
  display: flex;
  width: 150px;
  height: 225px;
`;

const StyledNoPosterIcon = styled(EyeNoneIcon)`
  color: ${(props) => props.theme.colors.border.secondary};
  height: 50px;
  margin: auto;
  width: 50px;
`;

export { StyledEmptyPoster, StyledNoPosterIcon, StyledPoster };
