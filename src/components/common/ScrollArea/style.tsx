import styled from 'styled-components';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

const StyledScrollArea = styled(ScrollAreaPrimitive.Root)`
  overflow: hidden;
`;

const StyledScrollAreaViewport = styled(ScrollAreaPrimitive.Viewport)`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  padding: 0.1rem;
`;

const StyledThumb = styled(ScrollAreaPrimitive.Thumb)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.scrollbar.thumb};
  border-radius: 4px;
  position: relative;
  opacity: 0.6;

  ::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: 44px;
    min-height: 44px;
  }
`;

const StyledScrollAreaScrollbar = styled(ScrollAreaPrimitive.Scrollbar)`
  display: flex;
  user-select: none;
  touch-action: none;
  padding: 2px;
  background-color: ${(props) => props.theme.colors.scrollbar.bg};

  &[data-orientation='vertical'] {
    width: 10px;
  }

  &[data-orientation='horizontal'] {
    flex-direction: column;
    height: 10px;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.scrollbar.bgHover};
  }
`;

export {
  StyledScrollArea,
  StyledScrollAreaViewport,
  StyledThumb,
  StyledScrollAreaScrollbar
};
