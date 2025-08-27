import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ detalle }) => {
  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        width: "90%",
        margin: "20px auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <div>
        <h1> Detalle Producto : {detalle.nombre}</h1>
        <img
          src={detalle.imagen}
          alt={detalle.nombre}
          style={{
            border: "1px solid black",
            width: "400px",
            height: "auto",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            borderRadius: "10px",
          }}
        />
      </div>
      <div
        style={{
          marginTop: "20px",
          fontSize: "1.2rem",
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <p>{detalle.descripcion}</p>
        <p
          style={{
            fontSize: "2rem",
            color: "rgba(0,150,255,100)",
            fontWeight: "bold",
          }}
        >
          Precio: ${detalle.precio}
        </p>
        <ItemCount stock={detalle.stock} />{" "}
        {/* Componente de contador de items falta logica para agregar al carrito y controlar el stock*/}
      </div>
    </div>
  );
};

export default ItemDetail;
