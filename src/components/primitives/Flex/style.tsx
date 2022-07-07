import styled from 'styled-components';

import { StyleProps } from 'components/primitives/system/system.types';

export type FlexStyleProps = Pick<
  StyleProps,
  | 'flex'
  | 'flexDirection'
  | 'flexShrink'
  | 'flexWrap'
  | 'margin'
  | 'justifyContent'
  | 'alignItems'
>;

const StyledFlex = styled.div<FlexStyleProps>`
  display: flex;
  flex: ${(props) => props.flex ?? '0 1 auto'};
  flex-direction: ${(props) => props.flexDirection ?? 'row'};
  flex-shrink: ${(props) => props.flexShrink ?? 0};
  flex-wrap: ${(props) => props.flexWrap ?? 'nowrap'};
  margin: ${(props) => props.margin ?? 0};
  justify-content: ${(props) => props.justifyContent ?? 'flex-start'};
  align-items: ${(props) => props.alignItems ?? 'normal'};
`;

export default StyledFlex;
