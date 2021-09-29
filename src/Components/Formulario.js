import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Error from "./Error";
import useMoneda from "../hooks/useMoneda";
import useCriptomoneda from "../hooks/useCriptomoneda";

import axios from "axios";

const Boton = styled.button`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Formulario = () => {
  //state de listado de criptomonedas
  const [listacripto, setlistacripto] = useState([]);
  const [error, setError] = useState(false);

  const MONEDAS = [
    { codigo: "USD", nombre: "Dolar Estados Unidos" },
    { codigo: "ARG", nombre: "Peso Argentino" },
    { codigo: "MXN", nombre: "Peso Mexicanos" },
    { codigo: "EUR", nombre: "Euro" },
    { codigo: "GBP", nombre: "Libra Esterlina" },
  ];

  //Utilizar useMoneda
  const [moneda, SelectMonedas] = useMoneda(
    "Selecciona una Moneda",
    "",
    MONEDAS
  );

  //Utilizar useCriptomoneda
  const [criptomoneda, SelectCripto] = useCriptomoneda(
    "Selecciona una Criptomeneda",
    "",
    listacripto
  );

  //Ejecutar llamado a la API criptocompare
  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const resultado = await axios.get(url);

      setlistacripto(resultado.data.Data);
    };
    consultarAPI();
  }, []);

  //Cuando el usuario hace submit
  const cotizarMoneda = (e) => {
    e.preventDefault();

    //Valida si ambos campos estan llenos
    if (moneda === "" || criptomoneda === "") {
      setError(true);
      return;
    }

    //Pasar los datos al componente principal
    setError(false);
  };

  return (
    <form onSubmit={cotizarMoneda}>
      {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}

      <SelectMonedas error={error} />

      <SelectCripto error={error} />

      <Boton type="submit" value="Calcular">
        Calcular
      </Boton>
    </form>
  );
};

export default Formulario;
