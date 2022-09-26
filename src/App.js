import {  Box } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./adminPages/adminDashboard";
import MenuPage from "./adminPages/adminMenu";
import SettingsPage from "./adminPages/adminSettings";
import OrderPage from "./adminPages/OrderPage";
import { AddMealCart} from "./components/addMealCart";
import "./style.css";
import { useButtonContext } from "./provider/buttonContext";
import AdminLogIn from "./adminPages/adminLogIn";
const App = () => {
  const { isAddMealClicked } = useButtonContext();
  return (
    <Router>
      <div>
        <Box>
          <Routes>
            <Route path="/" element={<OrderPage />}></Route>
            <Route path="/dashboard" element={<DashboardPage />}></Route>
            <Route path="/settings" element={<SettingsPage />}></Route>
            <Route path="/menu" element={<MenuPage />}></Route>
            <Route path="/login" element={<AdminLogIn/>}></Route>
          </Routes>
        </Box>
        {isAddMealClicked ? <AddMealCart/> : ''}
      </div>
    </Router>
  );
};

export default App;
