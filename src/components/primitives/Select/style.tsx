import {
  CheckIcon as RadixCheckIcon,
  ChevronDownIcon as RadixChevronDownIcon,
  ChevronUpIcon as RadixChevronUpIcon
} from '@radix-ui/react-icons';
import * as SelectPrimitive from '@radix-ui/react-select';
import styled from 'styled-components';

const StyledTrigger = styled(SelectPrimitive.SelectTrigger)`
  all: unset;
  color: ${(props) => props.theme.colors.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 0.5rem;
  font-size: ${(props) => props.theme.fontSizes.s};
  font-family: ${(props) => props.theme.fonts.main};
  background-color: ${(props) => props.theme.colors.main};
  border: 1px solid ${(props) => props.theme.colors.border.secondary};
`;

const StyledContent = styled(SelectPrimitive.Content)`
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.main};
  border-radius: 6px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`;

const StyledViewport = styled(SelectPrimitive.Viewport)`
  padding: 0.5rem;
`;

const StyledItem = styled(SelectPrimitive.Item)`
  all: unset;
  align-items: center;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props.theme.fontSizes.s};
  padding: 0 1rem 0 1.5rem;
  position: relative;
  user-select: none;

  &[data-disabled] {
    color: ${(props) => props.theme.colors.tertiary};
    pointer-events: none;
  }

  &:focus {
    color: ${(props) => props.theme.colors.secondary};
    background-color: ${(props) => props.theme.colors.select.item.bgHover};
  }
`;

const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator)`
  position: absolute;
  left: 0.4rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const StyledLabel = styled(SelectPrimitive.Label)`
  color: ${(props) => props.theme.colors.tertiary};
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-family: ${(props) => props.theme.fonts.main};
  padding: 0.3rem 1rem 0.3rem;
`;

const StyledSeparator = styled(SelectPrimitive.Separator)`
  background-color: ${(props) => props.theme.colors.border.secondary};
  margin: 0.4rem 0;
  height: 1px;
`;

const StyledScrollUpButton = styled(SelectPrimitive.ScrollUpButton)`
  align-items: center;
  cursor: default;
  display: flex;
  justify-content: center;
  height: 1.5rem;
`;

const StyledScrollDownButton = styled(SelectPrimitive.ScrollDownButton)`
  align-items: center;
  color: ${(props) => props.theme.colors.primary};
  cursor: default;
  background-color: ${(props) => props.theme.colors.main};
  display: flex;
  justify-content: center;
  height: 1.5rem;
`;

const ChevronUpIcon = styled(RadixChevronUpIcon)`
  color: ${(props) => props.theme.colors.secondary};
`;

const ChevronDownIcon = styled(RadixChevronDownIcon)`
  color: ${(props) => props.theme.colors.secondary};
`;

const CheckIcon = styled(RadixCheckIcon)`
  color: ${(props) => props.theme.colors.secondary};
`;

const TriggerIcon = styled(SelectPrimitive.SelectIcon)`
  margin-left: 1rem;
`;

export {
  StyledTrigger,
  StyledContent,
  StyledViewport,
  StyledItem,
  StyledLabel,
  StyledItemIndicator,
  StyledSeparator,
  StyledScrollUpButton,
  StyledScrollDownButton,
  ChevronDownIcon,
  ChevronUpIcon,
  CheckIcon,
  TriggerIcon
};
