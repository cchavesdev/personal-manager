import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import FoodTable from "./components/FoodTable/FoodTable";
import MenuAppBar from "./components/MenuAppBar/MenuAppBar";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Paper from '@mui/material/Paper';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function App() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

 
  return (
    <div className="App">
      <FoodTable />
      <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
     
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Alimentos" icon={<RestaurantIcon />} />
          <BottomNavigationAction label="Plan" icon={<ListAltIcon />} />
          <BottomNavigationAction label="Shopping" icon={<ShoppingCartIcon />} />
          <BottomNavigationAction label="User" icon={<AccountCircleIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
    </div>
  );
}

export default App;
