import { HTMLAttributes, PropsWithChildren } from 'react';
import styled from '@emotion/styled';

interface DateProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {}

export default function Date({ children }: DateProps) {
  return (
    <Container>
      <Text>{children}: </Text>
      <Input type='number' min='1' max={children === 'Month' ? '12' : '5'} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const Text = styled.h2`
  margin-right: 1rem;
`;

const Input = styled.input`
  width: 5rem;
  height: 2rem;
  padding: 1rem;
  font-size: 1.3rem;
  text-align: center;
  border: none;
  outline: 0;
  border-bottom: 1.5px solid var(--black);
  font-weight: var(--font-weight-bold);
`;
