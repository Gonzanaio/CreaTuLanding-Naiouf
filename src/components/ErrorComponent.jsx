import React from "react";
import { Link } from "react-router-dom";

const ErrorComponent = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1
        style={{
          marginBottom: "20px",
          fontStyle: "italic",
          width: "60%",
          margin: "20px auto",
        }}
      >
        UPS, no encontramos una ruta con esa dirección, presiona el boton para
        volver a la página principal.
      </h1>
      <Link
        to="/"
        style={{
          backgroundColor: "#007bff",
          borderRadius: "15px",
          width: "100px",
          height: "40px",
          color: "white",
          textDecoration: "none",
          padding: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        }}
      >
        HOME
      </Link>
    </div>
  );
};

export default ErrorComponent;
