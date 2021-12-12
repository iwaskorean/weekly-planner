import Header from '@components/Header/Header';
import EventsLayout from '@layouts/EventsLayout';
import NotesLayout from '@layouts/NotesLayout';
import { globalStyle } from '@styles/GlobalStyle';
import { Global } from '@emotion/react';

export default function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <Header />
      <EventsLayout />
      <NotesLayout />
    </>
  );
}
