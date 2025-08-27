import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ErrorComponent from "./components/ErrorComponent.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer msj="Bienvenidos a la tienda de productos 3D" />
          }
        />
        <Route
          path="/categoria/:category"
          element={<ItemListContainer msj="Categoria" />}
        />
        <Route path="/item/:id" element={<ItemDetailContainer />} />

        <Route path="*" element={<ErrorComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
