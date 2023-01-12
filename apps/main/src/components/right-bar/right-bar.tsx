import {Box} from '@mui/material';

/* eslint-disable-next-line */
export interface RightBarProps {}

const RightBar = (props: RightBarProps) => {
  return (
    <Box bgcolor="lightcoral" flex={2} padding={2} sx={{display: {xs: 'none', sm: 'block'}}}>
      RightBar
    </Box>
  );
}

export default RightBar;
