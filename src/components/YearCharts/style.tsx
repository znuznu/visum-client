import styled from 'styled-components';

const StyledYearChart = styled.div`
  background-color: cyan;
  height: 300px;
`;

type StyledBarValueProps = {
  heightPercentage: number;
};

const StyledBarValue = styled.span<StyledBarValueProps>`
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.secondary};
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props.theme.fontSizes.m};
  height: 10px;
  padding-left: 0.2rem;
  width: 10px;

  & > span {
    display: none;
  }

  &:hover {
    & > span {
      display: block;
    }
  }
`;

const StyledBarDetails = styled.span`
  position: absolute;
  color: ${(props) => props.theme.colors.primary};
`;

export { StyledYearChart, StyledBarValue, StyledBarDetails };
