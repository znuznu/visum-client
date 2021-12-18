import { EyeNoneIcon } from '@radix-ui/react-icons';
import styled from 'styled-components';

const StyledPoster = styled.img`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  width: 100px;
  box-shadow: 0 0 0 1px ${(props) => props.theme.colors.border.secondary};

  &:hover {
    cursor: pointer;
  }
`;

const StyledEmptyPoster = styled.div`
  background-color: ${(props) => props.theme.colors.main};
  border-radius: 5px;
  box-shadow: 0 0 0 1px ${(props) => props.theme.colors.border.secondary};
  display: flex;
  width: 100px;
  height: 150px;
`;

const StyledNoPosterIcon = styled(EyeNoneIcon)`
  color: ${(props) => props.theme.colors.border.secondary};
  height: 50px;
  margin: auto;
  width: 50px;
`;

export { StyledEmptyPoster, StyledNoPosterIcon, StyledPoster };
