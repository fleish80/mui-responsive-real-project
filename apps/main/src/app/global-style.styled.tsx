import {css, Global} from '@emotion/react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const GlobalStyle = (props: any) => (
  <Global
    {...props}
    styles={css`
      * {
        font-family: "Roboto";
        margin: 0;
      }
    `}
  />
)
