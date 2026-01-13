import { GlobalStyle } from "./styles/GlobalStyles"
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/Theme"
import ReactDOM from 'react-dom/client'

import { App } from './App'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <ThemeProvider theme={theme}>

      <GlobalStyle />

      <App />

    </ThemeProvider>
  </>
)