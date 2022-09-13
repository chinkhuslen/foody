import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {Button} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

const Search = styled('div')(({ theme }) => ({
  border:'1px solid #DFE0EB',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch'
    },
  },
}));

const MenuPage = () =>{
    return(
        <Box>
            <Box sx={{ flexGrow: 1 }}>
      <AppBar 
      position="static"
      elevation={0}
      sx={{
        backgroundColor:'white',
        color:'black',
        border:'1px solid #DFE0EB'
      }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' },color:'#252733' }}
          >
            Хоолны сан : {'0'}
          </Typography>

          <Search >
            <SearchIconWrapper>
              <SearchIcon sx={{color:'#DFE0EB'}}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Хайлт... "
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Button variant="outlined" sx={{color:'#252733', border:"1px solid #DFE0EB",ml:'17px',fontSize:{xs:'9px',sm:'16px'}}} startIcon={<AddIcon sx={{color:'green'}}/>}>Хоол нэмэх</Button>
        </Toolbar>
      </AppBar>
    </Box>
        </Box>
    )
}
export default MenuPage