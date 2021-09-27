import { useState } from "react";

const useMoneda = () => {
  //State de nuestro custom hooks
  const [state, actualizarState] = useState("");

  const Seleccionar = () => (
    <>
      <label>Moneda</label>
      <select>
        <option value="MXN">Peso mexicano</option>
      </select>
    </>
  );

  //Retornar state, inteerfaz y fn que modifica el state
  return [state, Seleccionar, actualizarState];
};

export default useMoneda;
