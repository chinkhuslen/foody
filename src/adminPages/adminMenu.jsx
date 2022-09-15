import * as React from 'react';
import Box from '@mui/material/Box';
import { useNavContext } from '../provider/navContext'
import ResponsiveDrawer from '../components/navigation';
import AddMealButton from '../components/addMealButton';
import { getFoodData } from "../firebase/foodMenu";
import { useEffect, useState } from "react";

const MenuPage = () => {
  const { setCurrentPage } = useNavContext();
  setCurrentPage('Меню');
  const [menuData, setMenuData] = useState([]);
  const reqMenuData = async () => {
    try {
      const data = await getFoodData();
      return data;
    } catch (error) {

    }
  }
  useEffect(() => {
    const get = async () => {
      try {
        const data = await reqMenuData();
        setMenuData(data);
        console.log(data);
      }
      catch (err) {
        console.log(err);
      }
    }
    get();
  }, [])

  return (
    <Box>
      <ResponsiveDrawer />
      <Box sx={{
        width: { sm: `calc(100% - 240px)` },
        ml: { sm: `240px` },
        mt: "100px",
      }}>
        <AddMealButton />
        <Box>{menuData.map(el=> 
        <Box>
          <Box>{el.name}</Box>
          <Box>₮{el.price}</Box>
          <Box>{el.portion}</Box>
        </Box>
        )}</Box>
      </Box>
    </Box>
  )
}
export default MenuPage