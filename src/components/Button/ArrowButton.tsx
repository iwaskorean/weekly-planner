import styled from '@emotion/styled';
import { ButtonHTMLAttributes } from 'react';
import temp from '../../assets/arrow-button.svg';

interface ArrowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  direction: 'left' | 'right';
}

export default function ArrowButton({ direction, ...props }: ArrowButtonProps) {
  return (
    <Button {...props}>
      <Image direction={direction} src={temp} />
    </Button>
  );
}

const Button = styled.button`
  width: 5rem;
  background: none;
  border: none;
  outline: 0;
`;

const Image = styled.img<{ direction: 'left' | 'right' }>`
  --rotation: ${({ direction }) => (direction === 'left' ? '-90deg' : '90deg')};
  width: 100%;
  transform: rotate(var(--rotation));
  cursor: pointer;
  opacity: 1;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.5;
    transform: rotate(var(--rotation)) translateY(-20%);
  }
`;
