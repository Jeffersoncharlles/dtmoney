import { ThemeProvider } from "styled-components"
import { TransactionsProvider } from "./context/TransactionsContext"
import { Home } from "./pages/Home"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/theme/default"


export const App = () => {


  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
        <Home />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
