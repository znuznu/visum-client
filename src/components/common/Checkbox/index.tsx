import React, { ReactEventHandler } from 'react';
import {
  CheckboxStyleProps,
  CheckIcon,
  StyledCheckbox,
  StyledCheckboxIndicator
} from './style';
import { AccessibleIcon } from '../AccessibleIcon';
import { Flex } from '../Flex';
import { Label } from '../Label';
import { HTMLAttributes } from '../../system/system.types';
import { CheckedState } from '@radix-ui/react-checkbox';

export interface CheckProps extends CheckboxStyleProps, HTMLAttributes {
  ariaLabel: string;
  label: string;
  onClick: ReactEventHandler;
  isChecked?: boolean;
}

const Checkbox = ({ ariaLabel, label, onClick, margin, id, isChecked }: CheckProps) => {
  const [checked, setChecked] = React.useState<CheckedState>(
    isChecked === undefined ? 'indeterminate' : isChecked
  );

  return (
    <Flex margin={margin}>
      <StyledCheckbox
        onClick={onClick}
        id={id}
        checked={checked}
        onCheckedChange={setChecked}
      >
        <StyledCheckboxIndicator>
          {checked === true && (
            <AccessibleIcon label={ariaLabel}>
              <CheckIcon />
            </AccessibleIcon>
          )}
        </StyledCheckboxIndicator>
      </StyledCheckbox>
      <Label margin={'auto 0 auto 0.4rem'} htmlFor={id}>
        {label}
      </Label>
    </Flex>
  );
};

export default Checkbox;
