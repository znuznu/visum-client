import styled from 'styled-components';

const StyledBreakdownCharts = styled.div`
  display: flex;

  & > div:not(:last-child) {
    margin-right: 4rem;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.xs}) {
    flex-direction: column;
    margin: 0 auto 0 0;

    & > div:not(:last-child) {
      margin-bottom: 1.5rem;
    }
  }
`;

const StyledCountCharts = styled.div`
  display: grid;
`;

const StyledBarLabel = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props.theme.fontSizes.m};
`;

type StyledBarValueProps = {
  widthPercentage: number;
};

const StyledBarValue = styled.span<StyledBarValueProps>`
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.secondary};
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props.theme.fontSizes.m};
  width: ${(props) => props.widthPercentage}%;
  padding-left: 0.2rem;

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

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, auto [col-start] 120px [col-end]);
  grid-template-rows: auto;
  gap: 0.5rem;
  margin: 0 0 auto;
`;

export {
  StyledBreakdownCharts,
  StyledCountCharts,
  StyledBarLabel,
  StyledBarValue,
  StyledBarDetails,
  StyledGrid
};
