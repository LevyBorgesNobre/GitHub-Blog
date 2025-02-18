import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/global";
import { GlobalStyle } from "./styles/default";
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"

export function App() {

  return (

    <ThemeProvider theme={ defaultTheme }>
      <BrowserRouter>
      <Router/>
      </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

