import { Flex } from 'components/primitives/Flex';
import { Separator } from 'components/primitives/Separator';

import { StyledTitle } from './style';

const StatisticsSectionHeader = ({ title }: { title: string }) => {
  return (
    <Flex margin={'0 0 1rem'}>
      <StyledTitle>{title}</StyledTitle>
      <Separator decorative={true} />
    </Flex>
  );
};

export default StatisticsSectionHeader;
