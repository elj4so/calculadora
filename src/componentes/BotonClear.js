import React from "react";

const esOperador = valor => {
    return isNaN(valor) && (valor != '.') && (valor != '=');
};

const BotonClear = (props) => (
    <div className = {`Boton-Clear ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
     onClick = {props.Clear}>
     {props.children}
    </div>
);

export default BotonClear;