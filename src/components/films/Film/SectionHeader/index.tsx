import { PropsWithChildren } from 'react';

import { Flex } from 'components/primitives/Flex';

import { StyledSectionTitle } from './style';

const SectionHeader = ({ children }: PropsWithChildren<any>) => {
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} margin={'0 0 0.5rem'}>
      {children}
    </Flex>
  );
};

type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => {
  return <StyledSectionTitle>{title}</StyledSectionTitle>;
};

export { SectionHeader, SectionTitle };
