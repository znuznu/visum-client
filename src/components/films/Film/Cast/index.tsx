import { CastMember } from 'models/movies';

import { NoData } from 'components/common/NoData';
import { Flex } from 'components/primitives/Flex';
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger
} from 'components/primitives/Tooltip';

import { SectionHeader, SectionTitle } from '../SectionHeader';
import { StyledLink, StyledSection } from '../style';

import { StyledBadge, StyledUnknownCharacter } from './style';

type CastBadgeProps = {
  id: number;
  name: string;
  forename: string;
  character: string | null;
};

export const CastBadge = ({ id, name, forename, character }: CastBadgeProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <StyledLink to={`/actor/${id}`}>
          <StyledBadge>
            {character || (
              <StyledUnknownCharacter>Unknown character</StyledUnknownCharacter>
            )}
          </StyledBadge>
        </StyledLink>
      </TooltipTrigger>
      <TooltipContent side={'top'}>
        {name} {forename}
        <TooltipArrow />
      </TooltipContent>
    </Tooltip>
  );
};

type CastProps = {
  actors: CastMember[];
};

const Cast = ({ actors }: CastProps) => {
  return (
    <StyledSection>
      <SectionHeader>
        <SectionTitle title={'Cast'} />
      </SectionHeader>
      <Flex flexWrap={'wrap'}>
        {actors.length ? (
          actors.map((actor) => {
            return (
              <CastBadge
                key={`cast-member-${actor.id}`}
                id={actor.id}
                name={actor.name}
                forename={actor.forename}
                character={actor.character}
              />
            );
          })
        ) : (
          <NoData>No actors found.</NoData>
        )}
      </Flex>
    </StyledSection>
  );
};

export default Cast;
