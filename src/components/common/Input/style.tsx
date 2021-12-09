import styled from 'styled-components';

const StyledLabel = styled.label`
  font-family: ${(props) => props.theme.fonts.main};
  font-weight: 300;
  font-size: ${(props) => props.theme.fontSizes.label};
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const StyledInput = styled.input`
  background-color: ${(props) => props.theme.colors.main};
  border: 1px solid ${(props) => props.theme.colors.border.secondary};
  border-radius: 4px;
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props.theme.fontSizes.input};
  padding: 0 0.3rem;
  width: auto;
`;

const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export { StyledLabel, StyledInput, InputBlock };
