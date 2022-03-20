import {
  CounterClockwiseClockIcon,
  FileTextIcon,
  HeartFilledIcon,
  StarFilledIcon
} from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FavoriteIcon = styled(HeartFilledIcon)`
  width: 1rem;
  height: 1rem;
  color: ${(props) => props.theme.colors.icons.favorite};
`;

const RewatchIcon = styled(CounterClockwiseClockIcon)`
  width: 1rem;
  height: 1rem;
  color: ${(props) => props.theme.colors.primary};
`;

const ReviewIcon = styled(FileTextIcon)`
  width: 1rem;
  height: 1rem;
  color: ${(props) => props.theme.colors.primary};
`;

const StyledTableData = styled.td`
  color: ${(props) => props.theme.colors.primary};
  border-bottom: 1px solid ${(props) => props.theme.colors.border.secondary};
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props.theme.fontSizes.m};
  text-align: center;
  padding: 0.5rem 0;
  vertical-align: middle;
`;

const StyledReleaseDate = styled(StyledTableData)`
  color: ${(props) => props.theme.colors.tertiary};
`;

const StyledGrade = styled(StyledTableData)`
  color: ${(props) => props.theme.colors.secondary};
`;

const StyledDay = styled(StyledTableData)`
  color: ${(props) => props.theme.colors.tertiary};
  font-size: ${(props) => props.theme.fontSizes.xl};
`;

const StyledNoData = styled(StyledTableData)`
  color: ${(props) => props.theme.colors.tertiary};
`;

const GradeIcon = styled(StarFilledIcon)`
  width: 0.8rem;
  height: 0.8rem;
  color: inherit;
  margin: auto 0 auto 2px;
`;

const StyledTitle = styled(Link)`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.logo};
  font-size: ${(props) => props.theme.fontSizes.m};
  margin: auto 0 auto 1rem;
  text-align: left;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
  }
`;

export {
  FavoriteIcon,
  RewatchIcon,
  ReviewIcon,
  StyledTableData,
  StyledTitle,
  StyledReleaseDate,
  GradeIcon,
  StyledGrade,
  StyledNoData,
  StyledDay
};
