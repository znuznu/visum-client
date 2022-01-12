import React, { ReactEventHandler } from 'react';
import { CheckIcon } from '@radix-ui/react-icons';
import { CheckboxStyleProps, StyledCheckbox, StyledCheckboxIndicator } from './style';
import { AccessibleIcon } from '../AccessibleIcon';
import { Flex } from '../Flex';
import { Label } from '../Label';
import { HTMLAttributes } from '../../system/system.types';

export interface CheckProps extends CheckboxStyleProps, HTMLAttributes {
  ariaLabel: string;
  label: string;
  onClick: ReactEventHandler;
}

const Checkbox = ({ ariaLabel, label, onClick, margin, id }: CheckProps) => {
  return (
    <Flex margin={margin}>
      <StyledCheckbox onClick={onClick} id={id}>
        <StyledCheckboxIndicator>
          <AccessibleIcon label={ariaLabel}>
            <CheckIcon />
          </AccessibleIcon>
        </StyledCheckboxIndicator>
      </StyledCheckbox>
      <Label margin={'auto 0 auto 0.4rem'} htmlFor={id}>
        {label}
      </Label>
    </Flex>
  );
};

export default Checkbox;
