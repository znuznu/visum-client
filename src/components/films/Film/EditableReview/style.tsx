import { Pencil1Icon, Pencil2Icon, ResetIcon, TrashIcon } from '@radix-ui/react-icons';
import styled from 'styled-components';

const StyledTitle = styled.h2`
  color: ${(props) => props.theme.colors.tertiary};
  font-family: inherit;
  font-size: inherit;
  text-transform: uppercase;
  margin: 0 0 0.2rem 0;
  padding: 0;
`;

const CancelIcon = styled(ResetIcon)`
  width: 1.3rem;
  height: 1.3rem;
`;

const EditIcon = styled(Pencil1Icon)`
  width: 1.3rem;
  height: 1.3rem;
  margin-right: 0.2rem;
`;

const Edit2Icon = styled(Pencil2Icon)`
  width: 1.3rem;
  height: 1.3rem;
  margin-right: 0.2rem;
`;

const RemoveIcon = styled(TrashIcon)`
  width: 1.3rem;
  height: 1.3rem;

  &:hover {
    color: ${(props) => props.theme.colors.status.error};
  }
`;

export { StyledTitle, CancelIcon, EditIcon, Edit2Icon, RemoveIcon };
