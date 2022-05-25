import styled from 'styled-components';
import { StyleProps } from 'components/system/system.types';

export type ButtonStyleProps = {
  variant?: 'default' | 'ghost';
} & Pick<
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
  ${(props) => {
    const variant = props.variant ?? 'default';

    return `
          color: ${props.theme.colors.button[variant].color};
          background-color: ${props.theme.colors.button[variant].bg};

          &:hover {
            cursor: ${props.disabled ? 'default' : props.cursor ?? 'pointer'};
            color: ${props.theme.colors.button[variant].colorHover};
            background-color: ${props.theme.colors.button[variant].bgHover};
          }

          &:disabled {
            background-color: ${props.theme.colors.button[variant].bgDisabled};
          }
        `;
  }}

  border: ${(props) => props.border ?? 'none'};
  border-radius: ${(props) => props.borderRadius ?? '4px'};
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
`;

export default StyledButton;
