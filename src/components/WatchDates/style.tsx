import { PlusIcon, TrashIcon } from '@radix-ui/react-icons';
import styled from 'styled-components';

const StyledNoWatchDates = styled.p`
  margin: 0;
  font-style: italic;
`;

const StyledWatchDate = styled.span`
  color: ${(props) => props.theme.colors.button.main.color};
  font-size: ${(props) => props.theme.fontSizes.s};
  font-family: ${(props) => props.theme.fonts.main};
`;

const RemoveIcon = styled(TrashIcon)`
  width: 1.3rem;
  height: 1.3rem;
  color: ${(props) => props.theme.colors.tertiary};

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.status.error};
  }
`;

const AddIcon = styled(PlusIcon)`
  width: 1.3rem;
  height: 1.3rem;
  color: ${(props) => props.theme.colors.tertiary};
  margin-right: 0.2rem;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export { StyledNoWatchDates, StyledWatchDate, RemoveIcon, AddIcon };
