import React, { TextareaHTMLAttributes } from 'react';
import binder from '@assets/binder-clip.svg';
import {
  saveToLocalStorage,
  useLocalStorage,
} from '../../hooks/useLocalStorage';
import Button from '@components/Button/Button';
import styled from '@emotion/styled';

interface NoteFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export default React.memo(function NoteField({
  label,
  ...props
}: NoteFieldProps) {
  const [content, setContent] = useLocalStorage('notes', label);

  return (
    <Container>
      <ImageBox>
        <Image src={binder} />
      </ImageBox>
      <Label>{label}</Label>
      <TextField
        value={content || ''}
        onChange={({ target }) => setContent(target.value)}
        {...props}
      />
      <Button onClick={() => saveToLocalStorage('notes', label, content)}>
        Save
      </Button>
    </Container>
  );
});

const Container = styled.div`
  position: relative;
  width: 90%;
  height: 80%;
  margin: 4rem 0 0.5rem 0;
`;

const ImageBox = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  top: -3.5rem;
`;

const Image = styled.img`
  width: 10rem;
  margin: 0 auto;
`;

const Label = styled.h2`
  position: absolute;
  width: 100%;
  text-align: center;
  margin-top: 2rem;
  font-size: 2rem;
  letter-spacing: 1px;
  font-weight: var(--font-weight-bold);
`;

const TextField = styled.textarea`
  width: 100%;
  height: 90%;
  font-size: 1.2rem;
  padding: 7rem 1rem;
  resize: none;
  background: var(--light-yellow);
  border: none;
  border-radius: 0.5rem;
  outline-color: #bf9200;
  &:focus + button {
    display: block;
  }
`;
