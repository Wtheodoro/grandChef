import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Routes from './routes'
import GlobalStyles from "./styles/GlobalStyles";

import lightTheme from './styles/themes/light'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
