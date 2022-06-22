import styled from 'styled-components';

import { StyleProps } from 'components/primitives/system/system.types';

type StyledSkeletonTextProps = Pick<StyleProps, 'margin'>;

const StyledSkeletonText = styled.div<StyledSkeletonTextProps>`
  display: flex;
  flex-direction: column;
  margin: ${(props) => props.margin};

  & > :not(:first-child) {
    margin-top: 0.5rem;
  }
`;

export { StyledSkeletonText };
