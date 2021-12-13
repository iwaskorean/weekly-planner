import { css } from '@emotion/react';

export const globalStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&family=Rajdhani:wght@300;400;700&family=Shadows+Into+Light&display=swap');

  :root {
    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-bold: 700;

    // color
    --light-blue: #ddebf8;
    --light-red: #f8d9d9;
    --light-yellow: #fffae8;
    --white: #ffffff;
    --black: #373737;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-family: 'Rajdhani', 'Noto Sans KR', sans-serif;
    font-size: 16px;
  }

  body {
    background-size: 30px 30px;
    background-image: linear-gradient(
        to right,
        #bbbbbb 1.3px,
        transparent 1.3px
      ),
      linear-gradient(to bottom, #bbbbbb 1.3px, transparent 1.3px);
  }
  overflow-x: hidden;
`;
