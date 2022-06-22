import { ThickArrowLeftIcon, ThickArrowRightIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledPerYearStatistics = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledYearTitle = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.logo};
  font-size: ${(props) => props.theme.fontSizes.xxxxl};
  font-weight: bold;
  text-align: center;
  margin: 0;
`;

const PreviousIcon = styled(ThickArrowLeftIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: ${(props) => props.theme.colors.primary};
`;

const NextIcon = styled(ThickArrowRightIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: ${(props) => props.theme.colors.primary};
`;

const StyledLink = styled(Link)`
  margin: auto 0;
`;

export { StyledPerYearStatistics, StyledYearTitle, PreviousIcon, NextIcon, StyledLink };
