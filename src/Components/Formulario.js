import styled from "@emotion/styled";
import useMoneda from "../hooks/useMoneda";

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

  return (
    <form>
      <SelectMonedas />

      <Boton type="submit" value="Calcular">
        Calcular
      </Boton>
    </form>
  );
};

export default Formulario;
