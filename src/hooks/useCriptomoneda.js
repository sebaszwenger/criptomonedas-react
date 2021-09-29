import { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-size: 1.8rem;
  margin-top: 2rem;
  display: block;
  text-align: center;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 10px;
  font-size: 15px;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  text-align-last: center;
  margin-top: 5px;
`;

const useCriptomoneda = (label, stateInicial, opciones) => {
  //   console.log(opciones);
  //State de nuestro custom hooks
  const [state, actualizarState] = useState(stateInicial);

  const SelectCripto = () => (
    <>
      <Label>{label}</Label>
      <Select onChange={(e) => actualizarState(e.target.value)} value={state}>
        <option value="" hidden>
          $$$
        </option>
        {opciones.map((opcion) => (
          <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>
            {opcion.CoinInfo.FullName}
          </option>
        ))}
      </Select>
    </>
  );

  //Retornar state, inteerfaz y fn que modifica el state
  return [state, SelectCripto, actualizarState];
};

export default useCriptomoneda;
