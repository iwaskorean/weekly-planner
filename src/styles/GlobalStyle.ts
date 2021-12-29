import { css } from '@emotion/react';

export const globalStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&family=Rajdhani:wght@300;400;700&family=Shadows+Into+Light&display=swap');

  :root {
    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-bold: 700;

    --light-blue: #ddebf8;
    --light-red: #f8d9d9;
    --light-yellow: #fffae8;
    --white: #ffffff;
    --black: #373737;

    --tablet-width: 800px;
    --mobile-width: 425px;

    --box-shadow: 3px 0px 15px #8a8a8a;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  button,
  input {
    font-family: 'Rajdhani', 'Noto Sans KR', sans-serif;
    font-size: 16px;
    @media (max-width: var(--tablet-width)) {
      font-size: 14px;
    }
    @media (max-width: var(--mobile-width)) {
      font-size: 12px;
    }
  }

  body {
    width: 100%;
    background-size: 30px 30px;
    background-image: linear-gradient(
        to right,
        #bbbbbb 1.3px,
        transparent 1.3px
      ),
      linear-gradient(to bottom, #bbbbbb 1.3px, transparent 1.3px);
    overflow-x: hidden;
  }
`;
