import { HTMLAttributes, PropsWithChildren } from 'react';
import styled from '@emotion/styled';

interface GridProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  buttonPosition: 'left' | 'right';
}

export default function Grid({ buttonPosition, children }: GridProps) {
  return <Wrapper buttonPosition={buttonPosition}>{children}</Wrapper>;
}

const Wrapper = styled.div<{ buttonPosition: 'left' | 'right' }>`
  width: 95%;
  margin: 1.5rem auto;
  display: grid;
  grid-template-columns: ${({ buttonPosition }) =>
    buttonPosition === 'right' ? '8rem 1fr 1fr' : '1fr 1fr 8rem'};
  gap: 0.2rem;
`;
