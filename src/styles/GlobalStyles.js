import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  color: red;
  font-style: normal;
}

html {
  font-size: 300px;
  background-color: green;
}

body {
  background-color: rgba(175, 26, 26, 1);
}
`