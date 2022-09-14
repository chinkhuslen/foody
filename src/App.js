import { AppBar, Box, Button, styled, Typography } from "@mui/material";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import DashboardPage from "./adminPages/adminDashboard";
import MenuPage from "./adminPages/adminMenu";
import SettingsPage from "./adminPages/adminSettings";
import OrderPage from "./adminPages/OrderPage";
import ResponsiveDrawer from "./components/navigation";
import { AddMealCart} from "./components/addMealCart";
import "./style.css";
import { useNavContext } from "./provider/navContext";
import { useButtonContext } from "./provider/buttonContext";
const App = () => {
  const { currentPage } = useNavContext();
  const { isAddMealClicked } = useButtonContext();
  return (
    <Router>
      <div>
        <ResponsiveDrawer />
        <Box
          sx={{
            width: { sm: `calc(100% - 240px)` },
            ml: { sm: `240px` },
            mt: "100px",
          }}
        >
          <Routes>
            <Route path="/" element={<OrderPage />}></Route>
            <Route path="/dashboard" element={<DashboardPage />}></Route>
            <Route path="/settings" element={<SettingsPage />}></Route>
            <Route path="/menu" element={<MenuPage />}></Route>
          </Routes>
        </Box>
        {isAddMealClicked ? <AddMealCart/> : ''}
      </div>
    </Router>
  );
};

export default App;
