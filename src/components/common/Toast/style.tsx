import * as ToastPrimitive from '@radix-ui/react-toast';
import styled, { keyframes } from 'styled-components';

const VIEWPORT_PADDING = 25;

const StyledViewport = styled(ToastPrimitive.Viewport)`
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: ${VIEWPORT_PADDING}px;
  gap: 10px;
  width: 390px;
  max-width: 100vw;
  margin: 0;
  list-style: none;
  z-index: 2147483647;
`;

const hide = keyframes`
  0% { opacity: 1 }
  100% { opacity: 0 }
`;

const slideIn = keyframes`
  from { transform: translateX(calc(100% + 25px)) }
  to { transform: translateX(0) }
`;

const swipeOut = keyframes`
  from { transform: translateX(var(--radix-toast-swipe-end-x)) }
  to { transform: translateX(calc(100% + 25px)) }
`;

export type ToastStyleProps = {
  variant?: 'default' | 'success' | 'error';
};

const StyledToast = styled(ToastPrimitive.Root)<ToastStyleProps>`
  ${(props) => {
    const variant = props.variant ?? 'default';

    return `
      background-color: ${props.theme.colors.toast[variant].bg};
    `;
  }}

  align-items: center;
  border-radius: 6px;
  font-family: ${(props) => props.theme.fonts.main};
  padding: 15px;

  display: grid;
  grid-template-areas: 'title action' 'description action';
  grid-template-columns: auto max-content;
  column-gap: 15px;

  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation: ${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1);
    }

    &[data-state='closed'] {
      animation: ${hide} 100ms ease-in forwards;
    }

    &[data-swipe='move'] {
      transform: translateX(var(--radix-toast-swipe-move-x));
    }

    &[data-swipe='cancel'] {
      transform: translateX(0);
      transition: transform 200ms ease-out;
    }

    &[data-swipe='end'] {
      animation: ${swipeOut} 100ms ease-out forwards;
    }
  }
`;

const StyledTitle = styled(ToastPrimitive.Title)<ToastStyleProps>`
  ${(props) => {
    const variant = props.variant ?? 'default';

    return `
      color: ${props.theme.colors.toast[variant].title};
    `;
  }}

  font-family: inherit;
  font-size: ${(props) => props.theme.fontSizes.m};
  font-weight: 700;
  grid-area: title;
  margin-bottom: 1rem;
`;

const StyledDescription = styled(ToastPrimitive.Description)<ToastStyleProps>`
  ${(props) => {
    const variant = props.variant ?? 'default';

    return `
      color: ${props.theme.colors.toast[variant].description};
    `;
  }}

  font-size: ${(props) => props.theme.fontSizes.s};
  font-family: inherit;
  grid-area: description;
  margin: 0;
`;

const StyledAction = styled(ToastPrimitive.Action)`
  grid-area: action;
`;

export { StyledAction, StyledViewport, StyledTitle, StyledDescription, StyledToast };
