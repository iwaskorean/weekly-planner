import { InputHTMLAttributes, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useLocalStorage } from '../../hooks/useLocalStorage';

interface DateProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function WeekField({ children, ...props }: DateProps) {
  const [week, setWeek] = useLocalStorage('date', 'week');

  useEffect(() => {
    const obj = JSON.parse(localStorage.getItem('date') as string);
    const date = {
      ...obj,
      week,
    };
    localStorage.setItem('date', JSON.stringify(date));
  }, [week]);

  return (
    <>
      <Container>
        <Text>Week: </Text>
        <Input
          type='week'
          value={week}
          onChange={({ target }) => {
            setWeek(target.value);
          }}
          {...props}
        />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
`;

const Text = styled.p`
  margin-right: 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  height: 2rem;
  padding: 1rem;
  font-size: 1.1rem;
  text-align: center;
  border: none;
  outline: 0;
  background: var(--white);
  border-bottom: 1.5px solid var(--black);
  font-weight: var(--font-weight-regular);
`;
