import {AppBar, Avatar, Badge, Box, InputBase, styled, Toolbar, Typography} from '@mui/material';
import {Mail, Notifications, Pets} from '@mui/icons-material';

/* eslint-disable-next-line */
export interface NavbarProps {
}

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
});

const Search = styled('div')(({theme}) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%',

  })
);

const Icons = styled(Box)(({theme}) => ({
    display: 'none',
    gap: '20px',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  })
);

const UserBox = styled(Box)(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const Navbar = (props: NavbarProps) => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{display: {xs: 'none', sm: 'block'}}}>LAMA DEV</Typography>
        <Pets sx={{display: {xs: 'block', sm: 'none'}}}/>
        <Search><InputBase placeholder="search..."/></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail/>
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications/>
          </Badge>
          <Avatar
            sx={{width: 30, height: 30}}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            // onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox>
          <Avatar
            sx={{width: 30, height: 30}}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            // onClick={(e) => setOpen(true)}
          />
          <Typography variant="body1">John</Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar;
