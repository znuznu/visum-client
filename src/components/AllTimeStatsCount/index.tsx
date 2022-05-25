import {
  StyledAllTimeStatsCount,
  StyledCount,
  StyledEntity,
  StyledStatsCount
} from './style';

interface AllTimeStatsCountProps {
  totalRuntimeInHours: number;
  reviewCount: number;
  movieCount: number;
}

interface StatsCountProps {
  count: number;
  entity: string;
}

const StatsCount = ({ count, entity }: StatsCountProps) => {
  return (
    <StyledStatsCount>
      <StyledCount>{count}</StyledCount>
      <StyledEntity>{entity}</StyledEntity>
    </StyledStatsCount>
  );
};

const AllTimeStatsCount = ({
  totalRuntimeInHours,
  reviewCount,
  movieCount
}: AllTimeStatsCountProps) => {
  return (
    <StyledAllTimeStatsCount>
      <StatsCount count={totalRuntimeInHours} entity={'hours'} />
      <StatsCount count={reviewCount} entity={'reviews'} />
      <StatsCount count={movieCount} entity={'films'} />
    </StyledAllTimeStatsCount>
  );
};

export default AllTimeStatsCount;
