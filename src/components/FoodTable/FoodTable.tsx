import React, { useState } from "react";
import food from '../../data/food.json';
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TextField,
  Paper,
} from "@mui/material";

interface FoodItem {
  food: string;
  sizeCooked: string;
  nonCooked: string;
  cooked: string;
  category: string;
}

const foodItems: FoodItem[] = food as FoodItem[];

function FoodTable() {
  const [filterName, setFilterName] = useState<string>("");

  const filteredItems: FoodItem[] = foodItems.filter((item) =>
    item.food.toLowerCase().includes(filterName.toLowerCase())
  );

  const headingStyle = {background: "#000", color: "#fff"};

  console.log(food);
  return (
    <div className="food-container">
      <TextField
        label="Buscar por nombre"
        variant="outlined"
        fullWidth
        value={filterName}
        onChange={(e) => setFilterName(e.target.value)}
        className="search-field"
      />
      <TableContainer component={Paper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell style={headingStyle}>Alimento</TableCell>
              <TableCell style={headingStyle}>Porcion Cocido</TableCell>
              <TableCell style={headingStyle}>Porcion Crudo</TableCell>
              <TableCell style={headingStyle}>Medida Cocido</TableCell>
              <TableCell style={headingStyle}>Tipo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredItems.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.food}</TableCell>
                <TableCell>{item.cooked}</TableCell>
                <TableCell>{item.nonCooked}</TableCell>
                <TableCell>{item.sizeCooked}</TableCell>
                <TableCell>{item.category}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default FoodTable;
