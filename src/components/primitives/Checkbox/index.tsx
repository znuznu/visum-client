import React, { ReactEventHandler } from 'react';
// eslint-disable-next-line
import { CheckedState } from '@radix-ui/react-checkbox';

import { AccessibleIcon } from 'components/primitives/AccessibleIcon';
import { Flex } from 'components/primitives/Flex';
import { Label } from 'components/primitives/Label';
import { HTMLAttributes } from 'components/primitives/system/system.types';

import {
  CheckIcon,
  CheckboxStyleProps,
  StyledCheckbox,
  StyledCheckboxIndicator
} from './style';

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
