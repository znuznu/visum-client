import styled from 'styled-components';
import * as TabsPrimitive from '@radix-ui/react-tabs';

const StyledTabsList = styled(TabsPrimitive.List)`
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-shrink: 0;
  font-family: ${(props) => props.theme.fonts.main};
  font-weight: 900;
  margin-bottom: 1.5rem;
`;

const StyledTabsTrigger = styled(TabsPrimitive.Trigger)`
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.border.secondary};
  flex: 1;
  justify-content: center;
  padding: 1rem;
  text-align: center;

  &:first-child {
    border-top-left-radius: 4px;
  }
  &:last-child {
    border-top-right-radius: 4px;
  }
  &[data-state='active'] {
    color: ${(props) => props.theme.colors.text.secondary};
    border-bottom: 1px solid ${(props) => props.theme.colors.border.primary};
  }
  &[data-state='inactive'] {
    opacity: 0.5;
  }
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export { StyledTabsList, StyledTabsTrigger };
