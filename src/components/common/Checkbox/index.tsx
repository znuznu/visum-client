import React, { ReactEventHandler } from 'react';
import { CheckedState } from '@radix-ui/react-checkbox';
import {
  CheckboxStyleProps,
  CheckIcon,
  StyledCheckbox,
  StyledCheckboxIndicator
} from './style';
import { AccessibleIcon } from 'components/common/AccessibleIcon';
import { Flex } from 'components/common/Flex';
import { Label } from 'components/common/Label';
import { HTMLAttributes } from 'components/system/system.types';

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
