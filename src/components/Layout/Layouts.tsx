import styled from '@emotion/styled';
import { HTMLAttributes, PropsWithChildren } from 'react';

interface LayoutsProps
  extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  active: boolean;
}

export default function Layouts({ active, children, ...props }: LayoutsProps) {
  return (
    <Wrapper active={active} {...props}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div<{ active: boolean }>`
  display: grid;
  grid-template-columns: 100% 100%;
  height: 90vh;
  transform: translateX(${({ active }) => (active ? '-100%' : '0%')});
  transition: transform 0.5s ease-in-out;
  margin: 3rem 0;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    tranform: none;
  }
`;
