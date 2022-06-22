import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import styled, { keyframes } from 'styled-components';

const slideUpAndFade = keyframes`
  0%: { opacity: 0, transform: translateY(2px) },
  100%: { opacity: 1, transform: translateY(0) }
`;

const slideRightAndFade = keyframes`
  0%: { opacity: 0, transform: translateX(-2px) },
  100%: { opacity: 1, transform: translateX(0) }
`;

const slideDownAndFade = keyframes`
  0%: { opacity: 0, transform: translateY(-2px) },
  100%: { opacity: 1, transform: translateY(0) }
`;

const slideLeftAndFade = keyframes`
  0%: { opacity: 0, transform: translateX(2px) },
  100%: { opacity: 1, transform: translateX(0) }
`;

const StyledTooltipContent = styled(TooltipPrimitive.Content)`
  display: flex;
  background-color: ${(props) => props.theme.colors.tooltip.bg};
  border-radius: 4px;
  box-shadow: 0 0 0 1px ${(props) => props.theme.colors.tooltip.bgBorder};
  color: ${(props) => props.theme.colors.text.secondary};
  font-size: 11px;
  font-family: ${(props) => props.theme.fonts.main};
  padding: 0.4rem;
  width: auto;

  @media (prefers-reduced-motion: no-preference) {
    animationduration: 400ms;
    animationtimingfunction: cubic-bezier(0.16, 1, 0.3, 1);
    willchange: transform, opacity;
    &[data-state='delayed-open'] {
      &[data-side='top'] {
        animation-name: ${slideDownAndFade};
      }

      &[data-side='right'] {
        animation-name: ${slideLeftAndFade};
      }

      &[data-side='bottom'] {
        animation-name: ${slideUpAndFade};
      }

      &[data-side='left'] {
        animation-name: ${slideRightAndFade};
      }
    }
  }
`;

const StyledTooltipArrow = styled(TooltipPrimitive.Arrow)`
  fill: ${(props) => props.theme.colors.tooltip.bgBorder};
`;

export { StyledTooltipContent, StyledTooltipArrow };
