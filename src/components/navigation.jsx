import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import {Avatar} from "@mui/material";
import { deepOrange, deepPurple } from '@mui/material/colors';
import Logo from "../Logo";
import { useState } from "react";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [currentPage, setCurrentPage] = useState('Захиалга')

  const drawer = (
    <div>
      <List
        sx={{ backgroundColor: "#000723", height: "100vh", color: "#ffffff" }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          margin="30px  0"
        >
          <Logo />
        </Box>

        {[
          { text: "Захиалга", path: "/", icon: <ShoppingCartIcon /> },
          {
            text: "График",
            path: "/dashboard",
            icon: <SignalCellularAltIcon />,
          },
          { text: "Тохиргоо", path: "/settings", icon: <SettingsIcon /> },
          { text: "Меню", path: "/menu", icon: <RestaurantIcon /> },
          { text: "Гарах", path: "/", icon: <LogoutIcon /> },
        ].map((el) => (
          <Link to={el.path} onClick={() => setCurrentPage(el.text)}>
            <ListItem key={el.text} disablePadding sx={{ color: "#ffffff",background: currentPage==el.text ? 'linear-gradient(90deg, rgba(102,182,15,0.5303308823529411) 7%, rgba(102,182,15,0) 100%)':'none' }}>
              <ListItemButton>
                <ListItemIcon sx={{ color: "#ffffff" }}>{el.icon}</ListItemIcon>
                <ListItemText primary={el.text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>


      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          right:0,
          backgroundColor:'white',
          color:'black',
          height:'100px',
        }}
        elevation={0}
      >
        <Toolbar sx={{display:{sm:"flex"}, alignItems:{sm:'center'},height:'100%'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{color:'#252733'}} />
          </IconButton>

          <Typography noWrap component="div" sx={{fontSize:'32px',fontWeight:'700' ,lineHeight:'40px',color:'#252733'}}>
            {currentPage}
          </Typography>

          <Box sx={{position:'absolute', right:30+"px", display:"flex", alignItems:'center',gap:10+'px'}}>
          <Typography>
            Name
          </Typography>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
          </Box>
        </Toolbar>
      </AppBar>






{/*---------------------navigation -------------------------*/}

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
{/*---------------------mobile drawer -------------------------*/}

        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
{/*---------------------desktop drawer -------------------------*/}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              border:'none',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
