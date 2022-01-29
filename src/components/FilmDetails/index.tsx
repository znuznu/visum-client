import React from 'react';

import { Flex } from '../common/Flex';
import { StyledSectionTitle } from '../Film/style';
import {
  StyledDetailsRow,
  StyledDetailsBody,
  StyledDetailsData,
  StyledDetailsTable
} from './style';

export const formatNumberWithSpace = (n: number): string => {
  if (n <= 0) {
    return n.toString();
  }

  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

interface FilmDetailsProps {
  budget?: number;
  revenue?: number;
  runtimeInMinutes?: number;
  originalLanguage?: string;
}

const FilmDetails = ({
  budget = 0,
  revenue = 0,
  runtimeInMinutes = 0,
  originalLanguage = 'Unknown'
}: FilmDetailsProps) => {
  return (
    <Flex flexDirection={'column'}>
      <StyledSectionTitle>Details</StyledSectionTitle>
      <StyledDetailsTable>
        <StyledDetailsBody>
          <StyledDetailsRow>
            <StyledDetailsData>Budget</StyledDetailsData>
            <StyledDetailsData>{formatNumberWithSpace(budget)}$</StyledDetailsData>
          </StyledDetailsRow>
          <StyledDetailsRow>
            <StyledDetailsData>Revenue</StyledDetailsData>
            <StyledDetailsData>{formatNumberWithSpace(revenue)}$</StyledDetailsData>
          </StyledDetailsRow>
          <StyledDetailsRow>
            <StyledDetailsData>Runtime</StyledDetailsData>
            <StyledDetailsData>{runtimeInMinutes} min</StyledDetailsData>
          </StyledDetailsRow>
          <StyledDetailsRow>
            <StyledDetailsData>Language</StyledDetailsData>
            <StyledDetailsData>{originalLanguage}</StyledDetailsData>
          </StyledDetailsRow>
        </StyledDetailsBody>
      </StyledDetailsTable>
    </Flex>
  );
};

export default FilmDetails;
