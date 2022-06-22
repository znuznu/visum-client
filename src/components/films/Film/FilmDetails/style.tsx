import styled from 'styled-components';

const StyledDetailsTable = styled.table`
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props.theme.fontSizes.s};
  width: 200px;
  border-spacing: 0rem;
`;

const StyledDetailsBody = styled.tbody`
  margin: 0;
`;

const StyledDetailsRow = styled.tr``;

const StyledDetailsData = styled.td`
  align-items: center;
  color: ${(props) => props.theme.colors.primary};

  &:last-child {
    color: ${(props) => props.theme.colors.tertiary};
  }
`;

export { StyledDetailsTable, StyledDetailsBody, StyledDetailsRow, StyledDetailsData };
