import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import { styled, alpha } from '@mui/material/styles';
import SearchBar from '../atoms/SearchBar';

export default function NavBar(){
    

    return(
      <Box>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
              </IconButton>
              <SearchBar />
          </Toolbar>
        </AppBar>
      </Box>
    )
}