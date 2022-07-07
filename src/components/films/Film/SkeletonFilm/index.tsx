import { useEffect, useState } from 'react';

import useWindowSize from 'hooks/useWindowSize';

import { S_BREAKPOINT_IN_PIXEL } from 'styles/theme/breakpoints';

import { Flex } from 'components/primitives/Flex';
import { Separator } from 'components/primitives/Separator';
import Skeleton from 'components/primitives/Skeleton';
import SkeletonText from 'components/primitives/Skeleton/SkeletonText';
import { StyledSection } from 'components/films/Film/style';

import { SectionHeader, SectionTitle } from '../SectionHeader';

import { StyledSkeletonFilm, StyledSkeletonFilmContent } from './style';

type SkeletonFilmProps = {
  withWatchDates: boolean;
};

const SkeletonFilm = ({ withWatchDates }: SkeletonFilmProps) => {
  const windowSize = useWindowSize();
  const [posterWidth, setPosterWidth] = useState(
    windowSize.width >= S_BREAKPOINT_IN_PIXEL ? '250px' : '100px'
  );
  const [posterHeight, setPosterHeight] = useState(
    windowSize.width >= S_BREAKPOINT_IN_PIXEL ? '375px' : '150px'
  );

  useEffect(() => {
    setPosterWidth(windowSize.width >= S_BREAKPOINT_IN_PIXEL ? '250px' : '100px');
    setPosterHeight(windowSize.width >= S_BREAKPOINT_IN_PIXEL ? '375px' : '150px');
  }, [windowSize]);

  return (
    <StyledSkeletonFilm>
      <Skeleton width={posterWidth} height={posterHeight} />
      <StyledSkeletonFilmContent>
        <Flex>
          <Skeleton width={'100%'} height={'30px'} />
          <Skeleton width={'60px'} height={'20px'} margin={'auto 0 auto 0.5rem'} />
        </Flex>
        <SkeletonText width={'auto'} margin={'1rem 0 0'} lines={1} />
        <Skeleton width={'auto'} height={'20px'} margin={'1rem 0 0'} />
        <SkeletonText margin={'1rem 0'} lines={3} />
        <Separator decorative />
        <StyledSection>
          <SectionHeader>
            <SectionTitle title={'Cast'} />
          </SectionHeader>
          <SkeletonText margin={'0.3rem 0'} width={'auto'} lines={5} />
        </StyledSection>
        <Separator decorative />
        <SectionHeader>
          <SectionTitle title={'Genres'} />
        </SectionHeader>
        <SkeletonText margin={'0.3rem 0'} width={'auto'} lines={1} />
        <Separator decorative />
        {withWatchDates && (
          <>
            <SectionHeader>
              <SectionTitle title={'Watch dates'} />
            </SectionHeader>
            <SkeletonText margin={'0.3rem 0'} width={'auto'} lines={5} />
            <Separator decorative />
          </>
        )}
        <SectionHeader>
          <SectionTitle title={'Details'} />
        </SectionHeader>
        <SkeletonText margin={'1rem 0'} lines={4} />
      </StyledSkeletonFilmContent>
    </StyledSkeletonFilm>
  );
};

export default SkeletonFilm;
