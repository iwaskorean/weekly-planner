import { InputHTMLAttributes, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useLocalStorage } from '../../hooks/useLocalStorage';

interface DateProps extends InputHTMLAttributes<HTMLInputElement> {
  children: string;
}

export default function Date({ children, ...props }: DateProps) {
  const [num, setNum] = useLocalStorage('date', children);

  useEffect(() => {
    const obj = JSON.parse(localStorage.getItem('date') as string);
    const date = {
      ...obj,
      [children]: num,
    };
    localStorage.setItem('date', JSON.stringify(date));
  }, [num]);

  return (
    <Container>
      <Text>{children}: </Text>
      <Input
        type='number'
        value={num}
        onChange={({ target }) => setNum(target.value)}
        min='1'
        max={children === 'Month' ? '12' : '5'}
        {...props}
      />
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
