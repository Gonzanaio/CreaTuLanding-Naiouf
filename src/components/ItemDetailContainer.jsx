import ItemDetail from "./ItemDetail";
import { getItem } from "../Mock/AsyncMock.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getItem(id)
      .then((res) => setDetalle(res))
      .catch((err) => console.error(err));
  }, [id]);
  return (
    <div>
      <ItemDetail detalle={detalle} />
    </div>
  );
};

export default ItemDetailContainer;
