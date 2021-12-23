import React, { TextareaHTMLAttributes, useRef } from 'react';
import {
  saveToLocalStorage,
  useLocalStorage,
} from '../../hooks/useLocalStorage';
import Button from '@components/Button/Button';
import styled from '@emotion/styled';

interface EventFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  day: string;
}

export default React.memo(function EventField({
  day,
  ...props
}: EventFieldProps) {
  const [content, setContent] = useLocalStorage('events', day);
  const ref = useRef<HTMLTextAreaElement>(null);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && ref.current) {
      saveToLocalStorage('events', day, content);
      ref.current.blur();
    }
  };

  return (
    <Container>
      <Label>{day}</Label>
      <TextField
        value={content}
        onChange={({ target }) => setContent(target.value)}
        day={day}
        onKeyPress={handleKeyPress}
        ref={ref}
        {...props}
      />
      <Button onClick={() => saveToLocalStorage('events', day, content)}>
        Save
      </Button>
    </Container>
  );
});

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
  &:focus + button {
    display: block;
  }
`;

const Label = styled.h3`
  position: absolute;
  top: 0.1rem;
  left: 1rem;
  font-weight: var(--font-weight-light);
`;
