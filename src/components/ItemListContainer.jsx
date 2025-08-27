import "../styles/ItemListContainer.css";
import { getProducts } from "../Mock/AsyncMock.js";
import { useEffect, useState } from "react";
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ msj }) => {
  const [data, setData] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    getProducts()
      .then((res) => {
        if (category) {
          setData(res.filter((prod) => prod.category === category));
        } else {
          setData(res);
        }
      })
      .catch((err) => console.error(err));
  }, [category]);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{msj}</h2>

      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;
