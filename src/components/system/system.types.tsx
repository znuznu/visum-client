interface ThemingProps {
  variant?: string;
}
interface BorderProps {
  border?: string;
  borderRadius?: string;
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
    LayoutProps,
    PositionProps,
    SpaceProps {}
