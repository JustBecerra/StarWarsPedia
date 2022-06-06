import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchBar from '../atoms/SearchBar';
import Categories from '../atoms/Categories';
import Deathstar from '../../imgs/deathstar.png';
import { styled } from '@mui/material/styles';

export default function NavBar(){  
  const Deathstarlogo = styled('img')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    width: 60,
    height: 50,
  }));

  return(
    <Box>
      <AppBar position='fixed' sx={{ bgcolor:'transparent'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <Deathstarlogo src={Deathstar} />
          </IconButton>
          <SearchBar />
          <Categories />
        </Toolbar>
      </AppBar>
    </Box>
  )
}