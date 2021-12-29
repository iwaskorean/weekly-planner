import styled from '@emotion/styled';

export default function Footer() {
  return (
    <Container>
      <Link
        href='https://github.com/SewookHan/weekly-planner'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Icon
          src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
          alt='GitHub'
        />
      </Link>
    </Container>
  );
}

const Container = styled.footer`
  width: 100%;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--white);
  box-shadow: var(--box-shadow);
`;

const Link = styled.a``;

const Icon = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 100%;
`;
