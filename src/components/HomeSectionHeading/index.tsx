import { StyledHeading, StyledLink, StyledTitle } from './style';

type HomeSectionHeadingProps = {
  title: string;
  morePath?: string;
};

const HomeSectionHeading = ({ title, morePath }: HomeSectionHeadingProps) => {
  return (
    <StyledHeading>
      <StyledTitle>{title}</StyledTitle>
      {morePath && <StyledLink to={morePath}>More</StyledLink>}
    </StyledHeading>
  );
};

export default HomeSectionHeading;
