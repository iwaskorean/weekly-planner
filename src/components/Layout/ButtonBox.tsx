import { HTMLAttributes, PropsWithChildren } from 'react';
import styled from '@emotion/styled';

interface ButtonBoxProps
  extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {}

export default function ButtonBox({ children, ...props }: ButtonBoxProps) {
  return <Container {...props}>{children}</Container>;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
