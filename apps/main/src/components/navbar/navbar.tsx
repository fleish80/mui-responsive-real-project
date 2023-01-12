import {AppBar, Box, styled, Toolbar, Typography} from '@mui/material';
import {Pets} from '@mui/icons-material';

/* eslint-disable-next-line */
export interface NavbarProps {
}

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
});

const Search = styled('div')(({theme}) => ({
    backgroundColor: 'white'
  })
);

const Icons = styled(Box)(({theme}) => ({
    backgroundColor: 'white'
  })
);

const Navbar = (props: NavbarProps) => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{display: {xs:'none', sm: 'block'}}}>LAMA DEV</Typography>
        <Pets sx={{display: {xs:'block', sm: 'dev'}}}/>
        <Search>search</Search>
        <Icons>icons</Icons>
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar;
