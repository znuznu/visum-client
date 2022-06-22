import styled from 'styled-components';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

import { StyleProps } from 'components/system/system.types';

export type HttpErrorStyleProps = Pick<StyleProps, 'margin'>;

const StyledError = styled.div<HttpErrorStyleProps>`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.colors.status.error};
  border-radius: 4px;
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props.theme.fontSizes.s};
  padding: 0.5rem;
  margin: ${(props) => props.margin ?? '0'};
`;

const StyledErrorTitle = styled.div`
  color: ${(props) => props.theme.colors.status.error};
  text-transform: uppercase;
  margin-bottom: 0.3rem;
`;

const StyledErrorContent = styled.p`
  color: ${(props) => props.theme.colors.primary};
`;

const TriangleIcon = styled(ExclamationTriangleIcon)`
  vertical-align: middle;
  margin: auto 0.3rem auto 0;
`;

export { StyledError, StyledErrorTitle, StyledErrorContent, TriangleIcon };
