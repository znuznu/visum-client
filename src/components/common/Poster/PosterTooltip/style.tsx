import {
  EyeClosedIcon,
  EyeOpenIcon,
  HeartFilledIcon,
  HeartIcon,
  StarFilledIcon
} from '@radix-ui/react-icons';
import styled from 'styled-components';

const GradeIcon = styled(StarFilledIcon)`
  width: 0.8rem;
  height: 0.8rem;
  color: inherit;
  margin: auto 0 auto 2px;
`;

const FavoriteIcon = styled(HeartFilledIcon)`
  color: ${(props) => props.theme.colors.icons.favorite};
  width: 2rem;
  height: 2rem;
  margin: auto 0 auto 2px;
`;

const NotFavoriteIcon = styled(HeartIcon)`
  width: 2rem;
  height: 2rem;
  margin: auto 0 auto 2px;
`;

const ToWatchIcon = styled(EyeOpenIcon)`
  color: ${(props) => props.theme.colors.icons.watch};
  height: 2rem;
  width: 2rem;
  margin: auto 0 auto 2px;
`;

const NotToWatchIcon = styled(EyeClosedIcon)`
  color: ${(props) => props.theme.colors.tertiary};
  height: 2rem;
  width: 2rem;
  margin: auto 0 auto 2px;
`;

type StyledPosterContentProps = {
  width: string;
  height: string;
};

const StyledPosterContent = styled.div<StyledPosterContentProps>`
  display: flex;
  position: relative;
  height: ${(props) => props.height};
  width: ${(props) => props.width};

  &:hover {
    cursor: pointer;

    & > img,
    div {
      box-shadow: 0 0 0 1px ${(props) => props.theme.colors.border.primary};
    }
  }
`;

const StyledUserMetadata = styled.span`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.tertiary};
  // Careful with that
  z-index: 10;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
  width: 100%;
  height: 100%;
  position: absolute;
  align-items: center;
  justify-content: center;
  border-radius: 4px;

  & :not(:last-child) {
    margin-bottom: 0.3rem;
  }
`;

export {
  GradeIcon,
  StyledPosterContent,
  StyledUserMetadata,
  NotFavoriteIcon,
  FavoriteIcon,
  NotToWatchIcon,
  ToWatchIcon
};
