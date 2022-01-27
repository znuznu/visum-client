import styled from 'styled-components';
import { StyleProps } from '../../system/system.types';

export type ButtonStyleProps = Pick<
  StyleProps,
  | 'margin'
  | 'padding'
  | 'border'
  | 'borderRadius'
  | 'width'
  | 'height'
  | 'cursor'
  | 'position'
  | 'top'
  | 'bottom'
  | 'right'
  | 'left'
>;

const StyledButton = styled.button<ButtonStyleProps>`
  background-color: ${(props) => props.theme.colors.button.main.bg};
  border: ${(props) => props.border ?? 'none'};
  border-radius: ${(props) => props.borderRadius ?? '4px'};
  color: ${(props) => props.theme.colors.button.main.color};
  font-size: ${(props) => props.theme.fontSizes.m};
  font-family: ${(props) => props.theme.fonts.main};
  margin: ${(props) => props.margin ?? 'auto'};
  padding: ${(props) => props.padding ?? '0.4rem'};
  width: ${(props) => props.width ?? 'auto'};
  position: ${(props) => props.position ?? 'unset'};
  top: ${(props) => props.top ?? 'unset'};
  bottom: ${(props) => props.bottom ?? 'unset'};
  right: ${(props) => props.right ?? 'unset'};
  left: ${(props) => props.left ?? 'unset'};

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: ${(props) => (props.disabled ? 'default' : props.cursor ?? 'pointer')};
    color: ${(props) => props.theme.colors.button.main.color};
    background-color: ${(props) => props.theme.colors.button.main.bgHover};
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.button.main.bgDisabled};

    &:hover {
      background-color: ${(props) => props.theme.colors.button.main.bgDisabled};
    }
  }
`;

export default StyledButton;
