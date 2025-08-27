import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

const ItemCount = (stock) => {
  const [count, setCount] = useState(1);

  const aumentar = () => {
    if (count < stock.stock) setCount(count + 1);
    else setCount(stock.stock);
  };
  const disminuir = () => {
    if (count > 1) setCount(count - 1);
    else setCount(1);
  };

  return (
    <div>
      <div>
        <Button
          variant="danger"
          style={{ margin: "15px", padding: "20px" }}
          onClick={disminuir}
        >
          -
        </Button>
        <span>{count}</span>
        <Button
          variant="danger"
          style={{ margin: "15px", padding: "20px" }}
          onClick={aumentar}
        >
          +
        </Button>
      </div>
      <Button variant="success">Agregar al carrito</Button>
    </div>
  );
};

export default ItemCount;
