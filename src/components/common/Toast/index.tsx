import * as ToastPrimitive from '@radix-ui/react-toast';
import {
  StyledAction,
  StyledDescription,
  StyledTitle,
  StyledToast,
  StyledViewport
} from './style';

export const ToastProvider = ToastPrimitive.Provider;
export const ToastViewport = StyledViewport;
export const Toast = StyledToast;
export const ToastTitle = StyledTitle;
export const ToastDescription = StyledDescription;
export const ToastAction = StyledAction;
export const ToastClose = ToastPrimitive.Close;
