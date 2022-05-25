import styled from 'styled-components';
import { StyleProps } from 'components/system/system.types';

export type InputStyleProps = Pick<StyleProps, 'margin'>;

const StyledTextArea = styled.textarea<InputStyleProps>`
  background-color: ${(props) => props.theme.colors.main};
  border: 1px solid ${(props) => props.theme.colors.border.secondary};
  border-radius: 4px;
  color: ${(props) => props.theme.colors.primary};
  margin: ${(props) => props.margin ?? 0};
  font-family: ${(props) => props.theme.fonts.main};
  font-weight: 300;
  font-size: ${(props) => props.theme.fontSizes.s};
  padding: 0.4rem;
`;

export { StyledTextArea };
