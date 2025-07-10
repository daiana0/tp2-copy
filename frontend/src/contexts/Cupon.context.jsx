import { createContext, useState } from "react";
import axios from "axios";

const CuponContext = createContext();

function CuponProviderWrapper({ children }) {
  const [cupon, setCupon] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const [codigoIngresado, setCodigoIngresado] = useState("");

  // Esta función se ejecuta cuando el usuario hace clic en "Aplicar Cupón"
  function validarCupon() {
    axios
      .get(`http://localhost:3001/api/cupones/validar/${codigoIngresado}`)
      .then((response) => {
        const data = response.data;

        if (data && data.activo) {
          setCupon({
            nombre: data.nombre,
            porcentajeDescuento: data.porcentajeDescuento,
          });
          setMensaje(
            `Cupón aplicado: ${data.nombre} (${data.porcentajeDescuento}%)`
          );
        } else {
          setCupon(null);
          setMensaje("El código de cupón no es válido o está inactivo.");
        }
      })
      .catch((error) => {
        console.error("Error al validar cupón:", error);
        setCupon(null);
        setMensaje("Cupón inválido o no encontrado.");
      });
  }

  // Función opcional para quitar el cupón aplicado
  function quitarCupon() {
    setCupon(null);
    setMensaje("Cupón eliminado.");
  }

  return (
    <CuponContext.Provider value={{ cupon, mensaje, quitarCupon }}>
      <div style={{ margin: "1rem" }}>
        <input
          type="text"
          placeholder="Ingrese cupón"
          value={codigoIngresado}
          onChange={(e) => setCodigoIngresado(e.target.value)}
        />
        <button onClick={validarCupon}>Aplicar Cupón</button>
        {cupon && <button onClick={quitarCupon}>Quitar Cupón</button>}
        <p>{mensaje}</p>
      </div>

      {children}
    </CuponContext.Provider>
  );
}

export { CuponContext, CuponProviderWrapper };
