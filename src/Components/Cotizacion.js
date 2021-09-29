import styled from "@emotion/styled";

const Contenedor = styled.div``;

const Cotizacion = ({ resultado }) => {
  if (Object.keys(resultado).length === 0) return null;
  console.log(resultado);
  return (
    <div>
      <p>
        El precio es: <span>{resultado.PRICE}</span>
      </p>
      <p>
        Precio mas alto del dia: <span>{resultado.HIGHDAY}</span>
      </p>
      <p>
        Precio mas bajo del dia: <span>{resultado.LOWDAY}</span>
      </p>
      <p>
        Variacion últimas 24hs: <span>{resultado.CHANGEPCT24HOUR}</span>
      </p>
      <p>
        Última actiualización: <span>{resultado.LASTUPDATE}</span>
      </p>
    </div>
  );
};

export default Cotizacion;
