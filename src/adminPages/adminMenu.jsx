import * as React from 'react';
import Box from '@mui/material/Box';
import { useNavContext } from '../provider/navContext'
import ResponsiveDrawer from '../components/navigation';
import AddMealButton from '../components/addMealButton';
import { getFoodData } from "../firebase/foodMenu";
import { useEffect, useState } from "react";
import { foodDatas } from "../mockData/data"
import { IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
const MenuPage = () => {
  const { setCurrentPage } = useNavContext();
  setCurrentPage('Меню');
  const [menuData, setMenuData] = useState([...foodDatas]);
  // const [menuData, setMenuData] = useState([]);

  // const reqMenuData = async () => {
  //   try {
  //     const data = await getFoodData();
  //     return data;
  //   } catch (error) {

  //   }
  // }
  // useEffect(() => {
  //   const get = async () => {
  //     try {
  //       const data = await reqMenuData();
  //       setMenuData(data);
  //       console.log(data);
  //     }
  //     catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   get();
  // }, [])

  return (
    <Box>
      <ResponsiveDrawer />
      <Box sx={{
        width: { sm: `calc(100% - 240px)` },
        ml: { sm: `240px` },
        mt: "100px",
      }}>
        <AddMealButton />
        <Box sx={{ display: "flex", flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
          {menuData.map(el =>
            <Box sx={{ m: 2, width: '192px', position: 'relative' }}>
              <img src={el.image} style={{ width: '132px', zIndex: 1000000000, marginBottom: "-62px",marginLeft:'30px' }} />
              <Box sx={{ border: "1px solid rgba(0, 7, 35, 0.08)", height: '230px', width: '152px', borderRadius: '8px', display: 'flex', flexDirection: 'column', padding: '20px', justifyContent: 'center', position: 'relative' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Typography sx={{ fontWeight: 600 }}>{el.name}</Typography>
                  <Box sx={{mt:1}}>{el.portion}</Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', justifyContent: 'space-evenly', position: 'absolute', bottom: 10, width: '100%' }}>
                  <Box sx={{ fontWeight: 700, fontSize: 16 }}>₮{el.price}</Box>
                  <IconButton sx={{ bgcolor: 'rgba(102, 182, 15,0.1)' }}>
                    <AddIcon sx={{ color: '#66B60F' }} />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  )
}
export default MenuPage