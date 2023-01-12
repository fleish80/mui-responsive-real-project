import {Box} from '@mui/material';

/* eslint-disable-next-line */
export interface SidebarProps {}

const SideBar = (props: SidebarProps) => {
  return (
    <Box bgcolor="skyblue" flex={1} padding={2} sx={{display: {xs: 'none', sm: 'block'}}}>
      Sidebar
    </Box>
  );
}

export default SideBar;
