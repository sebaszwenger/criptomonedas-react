import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Error from "./Error";
import useMoneda from "../hooks/useMoneda";
import useCriptomoneda from "../hooks/useCriptomoneda";
import PropTypes from "prop-types";
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

const Formulario = ({ setMoneda, setCriptomoneda }) => {
  //state de listado de criptomonedas
  const [listacripto, setlistacripto] = useState([]);
  const [error, setError] = useState(false);

  //Tipos de monedas a cotizar
  const MONEDAS = [
    { codigo: "USD", nombre: "Dolar Estados Unidos" },
    { codigo: "MXN", nombre: "Peso Mexicanos" },
    { codigo: "EUR", nombre: "Euro" },
    { codigo: "GBP", nombre: "Libra Esterlina" },
  ];

  //Utilizamos nuestro custom hook useMoneda
  const [moneda, SelectMonedas] = useMoneda(
    "Selecciona una Moneda",
    "",
    MONEDAS
  );

  //Utilizamos nuestro custom hook useCriptomoneda
  const [criptomoneda, SelectCripto] = useCriptomoneda(
    "Selecciona una Criptomeneda",
    "",
    listacripto
  );

  //Llamado API criptocompare
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
    setCriptomoneda(criptomoneda);
    setMoneda(moneda);
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

Formulario.propTypes = {
  setMoneda: PropTypes.func.isRequired,
  setCriptomoneda: PropTypes.func.isRequired,
};

export default Formulario;
