import "../styles/ItemListContainer.css";

import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Item from "./Item";

import "../styles/ItemListContainer.css";

const ItemList = ({ data }) => {
  return (
    <div className="container mt-5 containerBox">
      <div className="ProductsContainer">
        {data.map((prod) => (
          <Item
            key={prod.id}
            className="Card"
            style={{ width: "18rem", margin: "10px" }}
            prod={prod}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
