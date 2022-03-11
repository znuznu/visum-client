import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon as RadixCheckIcon } from '@radix-ui/react-icons';
import styled from 'styled-components';
import { StyleProps } from '../../system/system.types';

export type CheckboxStyleProps = Pick<StyleProps, 'margin'>;

const StyledCheckbox = styled(CheckboxPrimitive.Root)`
  all: unset;
  background-color: ${(props) => props.theme.colors.main};
  width: 15px;
  height: 15px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.border.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto 0;

  &:hover {
    background-color: ${(props) => props.theme.colors.checkbox.bgHover};
    border-color: ${(props) => props.theme.colors.checkbox.border};
  }
`;

const StyledCheckboxIndicator = styled(CheckboxPrimitive.Indicator)`
  color: ${(props) => props.theme.colors.checkbox.indicator};
`;

const CheckIcon = styled(RadixCheckIcon)`
  margin-top: 5px;
`;

export { StyledCheckbox, StyledCheckboxIndicator, CheckIcon };
