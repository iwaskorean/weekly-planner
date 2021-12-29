import Logo from './Logo';
import WeekField from './WeekField';
import styled from '@emotion/styled';

export default function Header() {
  return (
    <Container>
      <Logo />
      <Group>
        <WeekField />
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
  box-shadow: var(--box-shadow);
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
