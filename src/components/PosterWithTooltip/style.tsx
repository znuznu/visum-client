import { StarFilledIcon } from '@radix-ui/react-icons';
import styled from 'styled-components';
import EmptyPoster from '../EmptyPoster';
import { StyledPoster } from '../Poster/style';

const StyledPosterWithTooltip = styled(StyledPoster)`
  &:hover {
    box-shadow: 0 0 0 1px ${(props) => props.theme.colors.border.primary};
    cursor: pointer;
  }
`;

const StyledEmptyPosterWithTooltip = styled(EmptyPoster)`
  &:hover {
    box-shadow: 0 0 0 1px ${(props) => props.theme.colors.border.primary};
    cursor: pointer;
  }
`;

const GradeIcon = styled(StarFilledIcon)`
  width: 0.8rem;
  height: 0.8rem;
  color: inherit;
  margin: auto 0 auto 2px;
`;

export { StyledPosterWithTooltip, StyledEmptyPosterWithTooltip, GradeIcon };
