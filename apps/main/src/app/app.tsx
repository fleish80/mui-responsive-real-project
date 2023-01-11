import {GlobalStyle} from './global-style.styled';
import Sidebar from '../components/sidebar/sidebar';
import {Feed} from '../components/feed/feed';
import RightBar from '../components/right-bar/right-bar';
import {Box, createTheme, PaletteMode, ThemeProvider} from '@mui/material';
import {useState} from 'react';

export function App() {

  const [mode, setMode] = useState<PaletteMode>('light');

  const darkTheme = createTheme({
    palette: {mode}
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle/>
      <Box>
        <Sidebar/>
        <Feed/>
        <RightBar/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
