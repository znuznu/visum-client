import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.primary};
  margin: auto;
  width: 350px;
  padding: 2rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
    width: auto;
  }
`;

export default Container;
