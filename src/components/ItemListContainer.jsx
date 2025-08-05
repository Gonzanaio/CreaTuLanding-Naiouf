import "../styles/ItemListContainer.css";
function ItemListContainer({ msj }) {
  return (
    <div className="container mt-5 containerBox">
      <h1 className="align-text-center">{msj}</h1>
    </div>
  );
}

export default ItemListContainer;
