import { PropsWithChildren, TextareaHTMLAttributes } from 'react';
import styled from '@emotion/styled';

interface EventFieldProps
  extends PropsWithChildren<TextareaHTMLAttributes<HTMLTextAreaElement>> {
  day: string;
}

export default function EventField({ day, ...props }: EventFieldProps) {
  return (
    <Container>
      <Label>{day}</Label>
      <TextField day={day} {...props}></TextField>
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
