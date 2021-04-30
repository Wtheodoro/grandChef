import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { useTheme } from './hooks/themeContext';
import Routes from './routes'
import GlobalStyles from "./styles/GlobalStyles";

function App() {

  const { theme } = useTheme()
  
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
