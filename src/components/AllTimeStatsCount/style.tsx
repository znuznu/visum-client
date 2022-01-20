import styled from 'styled-components';

const StyledAllTimeStatsCount = styled.div`
  display: flex;
  margin: 2rem auto;
`;

const StyledStatsCount = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-right: 2.5rem;
  }
`;

const StyledCount = styled.span`
  color: ${(props) => props.theme.colors.secondary};
  font-family: ${(props) => props.theme.fonts.logo};
  font-size: ${(props) => props.theme.fontSizes.xxxl};
  font-weight: bold;
  margin: 0 auto;
`;

const StyledEntity = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props.theme.fontSizes.m};
  margin: 0 auto;
  text-transform: uppercase;
`;

export { StyledCount, StyledEntity, StyledAllTimeStatsCount, StyledStatsCount };
