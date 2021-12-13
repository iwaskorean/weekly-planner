import Header from '@components/Header/Header';
import Layouts from '@components/Layout/Layouts';
import EventsLayout from '@layouts/EventsLayout';
import NotesLayout from '@layouts/NotesLayout';
import { globalStyle } from '@styles/GlobalStyle';
import { Global } from '@emotion/react';
import { useState } from 'react';

export default function App() {
  const [isTransfrom, setIsTransform] = useState(false);

  const handleLayout = () => {
    setIsTransform((prev) => !prev);
  };

  return (
    <>
      <Global styles={globalStyle} />
      <Header />
      <Layouts active={isTransfrom}>
        <EventsLayout handleLayout={handleLayout} />
        <NotesLayout handleLayout={handleLayout} />
      </Layouts>
    </>
  );
}
