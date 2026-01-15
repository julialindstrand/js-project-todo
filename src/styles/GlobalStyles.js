import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* min-width: 40%; */
}

 #root {
  width: 40%;
}

body {
  background-color: ${({ theme }) => theme.colors.bgColor};
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  /* min-height: 100vh; */
  }

  h1 {
    font-size: 32px;
    font-weight: 300;
  }

  h2 {
    font-size: 24px;
    font-weight: 300;
  }

  h3 {
    font-size: 18px;
    font-weight: 300;
  }

  p {
    font-size: 16px;
    font-weight: 400;
  }
`