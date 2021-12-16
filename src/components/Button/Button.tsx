import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styled from '@emotion/styled';

interface ButtonProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {}

export default function Button({ children, ...props }: ButtonProps) {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
}

const ButtonStyled = styled.button`
  display: none;
  position: absolute;
  bottom: 15%;
  right: 1rem;
  font-weight: var(--font-weight-bold);
  font-size: 0.9rem;
  background: var(--white);
  padding: 0.1rem 0.7rem;
  border: 2px solid var(--black);
  border-radius: 0.2rem;
  outline: 0;
  cursor: pointer;
  &:active {
    display: block;
  }
`;
