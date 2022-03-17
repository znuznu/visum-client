import React from 'react';

import { Month } from '../../../../models/diary';

import { StyledMonth } from './style';

type MonthBadgeProps = {
  month: Month;
};

const MonthBadge = ({ month }: MonthBadgeProps) => {
  return <StyledMonth>{month.slice(0, 3)}</StyledMonth>;
};

export default MonthBadge;
