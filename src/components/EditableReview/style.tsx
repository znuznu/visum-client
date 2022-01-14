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
  color: ${(props) => props.theme.colors.tertiary};

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.status.warning};
  }
`;

const EditIcon = styled(Pencil1Icon)`
  width: 1.3rem;
  height: 1.3rem;
  color: ${(props) => props.theme.colors.tertiary};
  margin-right: 0.2rem;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const Edit2Icon = styled(Pencil2Icon)`
  width: 1.3rem;
  height: 1.3rem;
  color: ${(props) => props.theme.colors.tertiary};
  margin-right: 0.2rem;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.secondary};
  }
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

const StyledNoReviewYet = styled.p`
  margin: 0;
  font-style: italic;
`;

export { StyledTitle, CancelIcon, EditIcon, Edit2Icon, RemoveIcon, StyledNoReviewYet };
