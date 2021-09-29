import styled from "@emotion/styled";
import Formulario from "./Components/Formulario";
import imagen from "./cryptomonedas.png";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  /* text-align: left; */
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &&::after {
    content: "";
    width: 143px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {
  const [moneda, setMoneda] = useState("");
  const [criptomoneda, setCriptomoneda] = useState("");

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      //Evitamos la primera ejecucion
      if (moneda === "") return;

      //Consultamos la API para obtener cotizacion
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

      const resultado = await axios.get(url);
      console.log(resultado.data.DISPLAY[criptomoneda][moneda]);
    };

    cotizarCriptomoneda();
  }, [moneda, criptomoneda]);

  return (
    <Contenedor>
      <div>
        <Imagen src={imagen} alt="Imagen logos de criptomonedas" />
      </div>
      <div>
        <Heading>Cotiza criptomonedas al instante</Heading>
        <Formulario setMoneda={setMoneda} setCriptomoneda={setCriptomoneda} />
      </div>
    </Contenedor>
  );
}

export default App;
