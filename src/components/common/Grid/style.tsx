import styled from 'styled-components';
import { StyleProps } from '../../system/system.types';

export type GridStyleProps = Pick<
  StyleProps,
  'padding' | 'gap' | 'columnSize' | 'rowSize' | 'margin'
>;

const StyledGrid = styled.div<GridStyleProps>`
  display: grid;
  gap: ${(props) => props.gap};
  grid-template-columns: repeat(auto-fill, ${(props) => props.columnSize} [col-start]);
  padding: ${(props) => props.padding ?? 0};
  margin: ${(props) => props.margin ?? 0};
`;

export { StyledGrid };
