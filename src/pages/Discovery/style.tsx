import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import styled from 'styled-components';

const StyledDiscover = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.logo};
  font-size: ${(props) => props.theme.fontSizes.xxxl};
  text-align: center;
  margin: 0 0 1rem;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const SearchIcon = styled(MagnifyingGlassIcon)`
  color: ${(props) => props.theme.colors.primary};
  width: 1.5rem;
  height: 1.5rem;
`;

export { StyledDiscover, StyledTitle, StyledForm, SearchIcon };
