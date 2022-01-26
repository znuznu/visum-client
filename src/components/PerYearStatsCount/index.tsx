import React from 'react';
import {
  StyledCount,
  StyledEntity,
  StyledStatsCount,
  StyledPerYearStatsCount
} from './style';

interface PerYearStatsCountProps {
  totalRuntimeInHours: number;
  reviewsWrittenCount: number;
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

const PerYearStatsCount = ({
  totalRuntimeInHours,
  reviewsWrittenCount,
  movieCount
}: PerYearStatsCountProps) => {
  return (
    <StyledPerYearStatsCount>
      <StatsCount count={totalRuntimeInHours} entity={'hours'} />
      <StatsCount count={reviewsWrittenCount} entity={'reviews written'} />
      <StatsCount count={movieCount} entity={'films'} />
    </StyledPerYearStatsCount>
  );
};

export default PerYearStatsCount;
