import React from 'react';
import styled from 'styled-components';

import { MoviesAndTv } from '@styled-icons/fluentui-system-filled';
import { Movie2 } from '@styled-icons/remix-fill';
import { CameraMovie } from '@styled-icons/boxicons-solid';

const Container = styled.div`
  display: flex;
  background: ${(props) => props.theme.colors.primary};
`;

const Titles = styled.div`
  display: flex;
  flex-wrap: nowrap;
  color: ${(props) => props.theme.colors.secondary};
  overflow: hidden;
  white-space: nowrap;
`;

const Title = styled.h1`
  font-family: 'Archivo';
  margin: 0;
  padding: 0 0.5rem;
  text-align: center;
  display: inline;
  font-size: 96px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.l}) {
    font-size: 72px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 55px;
  }
`;

const ClapperIcon = styled(MoviesAndTv)`
  width: 96px;
  min-width: 96px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.l}) {
    width: 72px;
    min-width: 72px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    width: 55px;
    min-width: 55px;
  }
`;

const ReelIcon = styled(Movie2)`
  width: 96px;
  min-width: 96px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.l}) {
    width: 72px;
    min-width: 72px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    width: 55px;
    min-width: 55px;
  }
`;

const CameraIcon = styled(CameraMovie)`
  width: 96px;
  min-width: 96px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.l}) {
    width: 72px;
    min-width: 72px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    width: 55px;
    min-width: 55px;
  }
`;

const Headline = () => {
  return (
    <Container>
      <Titles>
        {[...Array(3)].map((_, index) => {
          return (
            <React.Fragment key={`titles-${index}`}>
              <Title>VISUM</Title>
              <ClapperIcon />
              <Title>VISUM</Title>
              <ReelIcon />
              <Title>VISUM</Title>
              <CameraIcon />
            </React.Fragment>
          );
        })}
      </Titles>
    </Container>
  );
};

export default Headline;
