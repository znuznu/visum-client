import { ExitIcon } from '@radix-ui/react-icons';
import styled from 'styled-components';

const StyledLogout = styled.div`
  display: flex;
  padding: 0.3rem 0.7rem;
`;

const StyledLogoutText = styled.span`
  margin-right: 0.5rem;
`;

const StyledExitIcon = styled(ExitIcon)`
  width: 0.937rem;
  height: 0.937rem;
`;

export { StyledLogout, StyledLogoutText, StyledExitIcon };
