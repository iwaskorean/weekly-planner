import styled from '@emotion/styled';
import Logo from './Logo';
import Date from './Date';

export default function Header() {
  return (
    <Container>
      <Logo />
      <Group>
        <Date>Month</Date>
        <Date>Week</Date>
      </Group>
    </Container>
  );
}

const Container = styled.header`
  font-family: 'Shadows Into Light', cursive;
  display: flex;
  width: 100%;
  padding: 1rem 2rem;
  background-color: var(--white);
  align-items: center;
  justify-content: space-between;
  box-shadow: 3px 0px 15px #8a8a8a;
  @media (max-width: 425px) {
    display: block;
    padding: 0.2rem 0.5rem;
    text-align: center;
  }
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  @media (max-width: 425px) {
    align-items: center;
  }
`;
