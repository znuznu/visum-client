import styled from 'styled-components';
import * as LabelPrimitive from '@radix-ui/react-label';

import { StyleProps } from 'components/primitives/system/system.types';

export type LabelStyleProps = Pick<StyleProps, 'margin'>;

const StyledLabel = styled(LabelPrimitive.Root)<LabelStyleProps>`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props.theme.fontSizes.s};
  margin: ${(props) => props.margin ?? 0};
`;

export { StyledLabel };
