import {GlobalStyle} from './global-style.styled';
import SideBar from '../components/side-bar/side-bar';
import Feed from '../components/feed/feed';
import RightBar from '../components/right-bar/right-bar';
import {Box, createTheme, PaletteMode, Stack, ThemeProvider} from '@mui/material';
import {useState} from 'react';
import Navbar from '../components/navbar/navbar';

const App = () => {

  const [mode, setMode] = useState<PaletteMode>('light');

  const darkTheme = createTheme({
    palette: {mode}
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle/>
      <Box>
        <Navbar/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <SideBar/>
          <Feed/>
          <RightBar/>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
