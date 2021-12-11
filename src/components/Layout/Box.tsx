import { HTMLAttributes, PropsWithChildren } from 'react';
import styled from '@emotion/styled';

interface BoxProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {}

export default function Box({ children, ...props }: BoxProps) {
  return <Container {...props}>{children}</Container>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: var(--white);
  border: 2px solid var(--black);
`;
