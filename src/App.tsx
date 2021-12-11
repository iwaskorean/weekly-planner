import Header from './components/Header/Header';
import EventsLayout from './layouts/EventsLayout';
import NotesLayout from './layouts/NotesLayout';
import { Global } from '@emotion/react';
import { globalStyle } from './styles/GlobalStyle';

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
