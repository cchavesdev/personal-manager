import React, { useState } from "react";
import food from "../../data/food.json";
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

  const headingStyle = { background: "#000", color: "#fff" };

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
              <TableCell style={headingStyle}>Medidas de Porción</TableCell>
              <TableCell style={headingStyle}>Tipo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredItems.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.food}</TableCell>
                <TableCell>
                  <ul>
                    {item.cooked ? <li>{item.cooked} cocido</li> : <></>}
                    {item.nonCooked ? <li>{item.nonCooked} crudo</li> : <></>}
                    {item.sizeCooked ? <li>{item.sizeCooked}</li> : <></>}
                  </ul>
                </TableCell>
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
