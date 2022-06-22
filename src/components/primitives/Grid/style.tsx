import styled from 'styled-components';

import { StyleProps } from 'components/system/system.types';

export type GridStyleProps = {
  colNumbers?: number | 'auto-fill';
} & Pick<StyleProps, 'padding' | 'gap' | 'columnSize' | 'rowSize' | 'margin'>;

const StyledGrid = styled.div<GridStyleProps>`
  display: grid;
  gap: ${(props) => props.gap};
  grid-template-columns: repeat(
    ${(props) => props.colNumbers ?? 'auto-fill'},
    ${(props) => props.columnSize} [col-start]
  );
  padding: ${(props) => props.padding ?? 0};
  margin: ${(props) => props.margin ?? 0};
`;

export { StyledGrid };
