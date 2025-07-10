import React, { useEffect, useState } from "react";
import axios from "axios";

function Categoria() {
  const [categorias, setCategorias] = useState([{}]);

  useEffect(() => {
    const getCategorias = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/categorias"
        );
        setCategorias(response.data);
      } catch (error) {
        console.error("Error fetching categorias:", error);
      }
    };
    getCategorias();
  }, []);

  const htmlCategorias = categorias.map((categoria) => {
    return (
      <div key={categoria.id}>
        <h3>{categoria.nombre}</h3>
        <img src={categoria.imagenUrl} alt={categoria.nombre} />
      </div>
    );
  });
  return <div>{htmlCategorias}</div>;
}

export default Categoria;
