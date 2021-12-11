import styled from '@emotion/styled';
import { HTMLAttributes, PropsWithChildren } from 'react';

interface TitleProps
  extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {}

export default function Title({ children, ...props }: TitleProps) {
  return <Text {...props}>{children}</Text>;
}

const Text = styled.h1`
  font-weight: var(--font-weight-bold);
  margin: 1rem 0;
`;
