import styled from 'styled-components';
import { StyleProps } from '../../system/system.types';

export type FlexStyleProps = Pick<
  StyleProps,
  'flex' | 'flexDirection' | 'flexShrink' | 'margin'
>;

const StyledFlex = styled.div<FlexStyleProps>`
  display: flex;
  flex: ${(props) => props.flex ?? '0 1 auto'};
  flex-direction: ${(props) => props.flexDirection ?? 'row'};
  flex-shrink: ${(props) => props.flexShrink ?? '0'};
  margin: ${(props) => props.margin ?? 0};
`;

export default StyledFlex;
