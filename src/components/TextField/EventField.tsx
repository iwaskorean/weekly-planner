import { TextareaHTMLAttributes, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import {
  saveToLocalStorage,
  useLocalStorage,
} from '../../hooks/useLocalStorage';

interface EventFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  day: string;
}

export default function EventField({ day, ...props }: EventFieldProps) {
  const [content, setContent] = useLocalStorage('events', day);

  return (
    <Container>
      <Label>{day}</Label>
      <TextField
        value={content}
        onChange={({ target }) => setContent(target.value)}
        day={day}
        {...props}
      ></TextField>
      {/* <button onClick={() => handleConfirm()}>confirm</button> */}
      <button onClick={() => saveToLocalStorage('events', day, content)}>
        confirm
      </button>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 90%;
  margin: 0.5rem 0;
`;

const TextField = styled.textarea<{ day: string }>`
  width: 100%;
  height: 6rem;
  padding: 2rem 1rem 1rem 1rem;
  font-size: 1.1rem;
  resize: none;
  border: none;
  background: #eeeeee;
  border-radius: 0.5rem;
  outline-color: #030304;
  ${({ day }) =>
    day === 'Sat' &&
    `
    background: var(--light-blue); 
    outline-color: #001ec6;
    `}
  ${({ day }) =>
    day === 'Sun' &&
    `
    background: var(--light-red); 
    outline-color: #d00000;
    `}
`;

const Label = styled.h3`
  position: absolute;
  top: 0.1rem;
  left: 1rem;
  font-weight: var(--font-weight-light);
`;
