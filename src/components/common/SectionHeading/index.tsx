import { ReactNode } from 'react';

import { StyledHeading, StyledTitle } from './style';

type SectionHeadingProps = {
  title: string;
  children?: ReactNode;
};

const SectionHeading = ({ title, children }: SectionHeadingProps) => {
  return (
    <StyledHeading>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </StyledHeading>
  );
};

export default SectionHeading;
