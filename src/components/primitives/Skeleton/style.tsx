import styled from 'styled-components';

import { StyleProps } from 'components/primitives/system/system.types';

export type SkeletonStyleProps = Pick<StyleProps, 'width' | 'height' | 'margin'>;

const StyledSkeletonBackground = styled.div`
  background-color: ${(props) => props.theme.colors.skeleton.bg};
  border-radius: 4px;

  animation: fadeIn ease-out 0.8s;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  @keyframes fadeIn {
    0% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
`;

const StyledSkeleton = styled(StyledSkeletonBackground)<SkeletonStyleProps>`
  ${(props) => `
      width: ${props.width};
      height: ${props.height};
      margin: ${props.margin};
    `}
`;

export { StyledSkeletonBackground, StyledSkeleton };
