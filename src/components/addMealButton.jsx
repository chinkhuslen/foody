import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { useButtonContext } from '../provider/buttonContext'
import {Search,SearchIconWrapper,StyledInputBase} from '../components/searchBar'

const AddMealButton = () => {
    const {setIsAddMealClicked,isAddMealClicked} = useButtonContext();
    const addMealButtonClicked = () => {
        setIsAddMealClicked(!isAddMealClicked);
      }
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          elevation={0}
          sx={{
            backgroundColor: 'white',
            color: 'black',
            border: '1px solid #DFE0EB'
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: '#252733' }}
            >
              Хоолны сан : {'0'}
            </Typography>

            <Search >
              <SearchIconWrapper>
                <SearchIcon sx={{ color: '#DFE0EB' }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Хайлт... "
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Button onClick={addMealButtonClicked} variant="outlined" sx={{ color: '#252733', border: "1px solid #DFE0EB", ml: '17px', fontSize: { xs: '9px', sm: '16px' } }} startIcon={<AddIcon sx={{ color: 'green' }} />}>Хоол нэмэх</Button>
          </Toolbar>
        </AppBar>
      </Box>
    )
}
export default AddMealButton