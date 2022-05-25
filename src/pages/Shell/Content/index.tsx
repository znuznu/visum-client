import { ReactNode } from 'react';
import StyledShellContent from './style';

type ShellContentProps = {
  children: ReactNode;
};

const ShellContent = ({ children }: ShellContentProps) => {
  return <StyledShellContent>{children}</StyledShellContent>;
};

export default ShellContent;
