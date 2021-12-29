import { useCallback, useState } from 'react';
import Header from '@components/Header/Header';
import Layouts from '@components/Layout/Layouts';
import EventsLayout from '@layouts/EventsLayout';
import NotesLayout from '@layouts/NotesLayout';
import Footer from '@components/Footer/Footer';
import { globalStyle } from '@styles/GlobalStyle';
import { Global } from '@emotion/react';

export default function App() {
  const [isTransfrom, setIsTransform] = useState(false);

  const handleLayout = useCallback(() => {
    setIsTransform((prev) => !prev);
  }, [isTransfrom]);

  return (
    <>
      <Global styles={globalStyle} />
      <Header />
      <Layouts active={isTransfrom}>
        <EventsLayout handleLayout={handleLayout} />
        <NotesLayout handleLayout={handleLayout} />
      </Layouts>
      <Footer />
    </>
  );
}
