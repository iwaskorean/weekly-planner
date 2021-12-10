import Header from './components/Header/Header';
import { Global } from '@emotion/react';
import { globalStyle } from './styles/GlobalStyle';

export default function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <Header />
    </>
  );
}
