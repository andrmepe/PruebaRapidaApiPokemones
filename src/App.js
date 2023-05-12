import PaginaPrincipal from "./components/paginaPrincipal/PaginaPrincipal";
import DetallePokemon from "./components/detallePokemon/DetallePokemon";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Navigate to={'/PaginaPrincipal'}/>}></Route>
        <Route path="/DetallePokemon" element = {<DetallePokemon/>}></Route>
        <Route path="/PaginaPrincipal" element = {<PaginaPrincipal/>}></Route>
      
      </Routes>
    </BrowserRouter>
    );
}

export default App;
