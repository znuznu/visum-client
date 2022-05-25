import { Flex } from 'components/common/Flex';
import { Separator } from 'components/common/Separator';
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
