import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Item({ prod }) {
  return (
    <Card>
      <Card.Img variant="top" className="ImgProd" src={prod.imagen} />
      <Card.Body className="BodyCard">
        <Card.Title>{prod.nombre}</Card.Title>
        <Card.Text>{prod.descripcion}</Card.Text>
        <Card.Text className="text-precio">${prod.precio}</Card.Text>
        <Link className="btn btn-primary w-100" to={`/item/${prod.id}`}>
          Ver Más
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Item;
