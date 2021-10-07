import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const MensajeError = styled.p`
  background-color: #b7322c;
  padding: 0.5rem;
  color: #fff;
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
  font-family: "Bebas Neue", cursive;
`;

const Error = ({ mensaje }) => {
  return <MensajeError>{mensaje}</MensajeError>;
};

Error.propTypes = {
  resultado: PropTypes.string.isRequired,
};
export default Error;
