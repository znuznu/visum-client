import styled from 'styled-components';
import * as Separator from '@radix-ui/react-separator';

const StyledSeparator = styled(Separator.Root)`
  background-color: ${(props) => props.theme.colors.border.secondary};
  margin: 1rem 0;

  &[data-orientation='horizontal'] {
    height: 1px;
    width: 100%;
  }

  &[data-orientation='vertical'] {
    height: 100%;
    width: 1px;
  }
`;

export default StyledSeparator;
