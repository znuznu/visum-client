import {
  EyeClosedIcon,
  EyeOpenIcon,
  HeartFilledIcon,
  HeartIcon,
  TrashIcon
} from '@radix-ui/react-icons';
import styled from 'styled-components';

const StyledMovieActionsPanel = styled.div`
  display: flex;
  margin: 1rem 0 0;
  justify-content: space-evenly;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    flex-direction: column;

    & > * {
      margin: 0 auto;
    }

    & :not(:first-child) {
      margin-top: 1rem;
    }
  }
`;

const FavoriteFilledIcon = styled(HeartFilledIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: ${(props) => props.theme.colors.icons.favorite};

  &:hover {
    cursor: pointer;
  }
`;

const FavoriteIcon = styled(HeartIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: ${(props) => props.theme.colors.text.primary};

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.icons.favorite};
  }
`;

const ToWatchIcon = styled(EyeClosedIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: ${(props) => props.theme.colors.text.primary};

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.icons.watch};
  }
`;

const ToWatchFilledIcon = styled(EyeOpenIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: ${(props) => props.theme.colors.icons.watch};

  &:hover {
    cursor: pointer;
  }
`;

const RemoveIcon = styled(TrashIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: ${(props) => props.theme.colors.status.error};

  &:hover {
    cursor: pointer;
  }
`;

export {
  StyledMovieActionsPanel,
  FavoriteFilledIcon,
  FavoriteIcon,
  ToWatchIcon,
  ToWatchFilledIcon,
  RemoveIcon
};
