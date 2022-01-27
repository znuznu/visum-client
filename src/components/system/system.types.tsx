interface ThemingProps {
  variant?: string;
}
interface BorderProps {
  border?: string;
  borderRadius?: string;
}

interface FlexProps {
  flex?:
    | string
    | 'auto'
    | 'content'
    | 'fit-content'
    | 'max-content'
    | 'min-content'
    | 'none';
  flexDirection?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
  flexShrink?: string | number;
  justifyContent?:
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'left'
    | 'normal'
    | 'right'
    | 'center';
}

interface GridProps {
  gap?: string;
  rowGap?: string;
  columnGap?: string;
  rowSize?: string;
  columnSize?: string;
}

interface LayoutProps {
  display?: 'flex' | 'block';
  width?: string;
  height?: string;
}

interface InteractivityProps {
  cursor?: 'pointer' | 'default';
}

interface PositionProps {
  position?: 'absolute' | 'static' | 'fixed' | 'sticky' | 'relative' | 'revert' | 'unset';
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  zIndex?: string;
}

interface SpaceProps {
  margin?: string;
  padding?: string;
}

export interface StyleProps
  extends BorderProps,
    InteractivityProps,
    FlexProps,
    GridProps,
    LayoutProps,
    PositionProps,
    SpaceProps {}

export interface HTMLAttributes {
  id?: string;
  name?: string;
}
