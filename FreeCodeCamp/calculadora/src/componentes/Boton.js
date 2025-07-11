import React from "react";
import '../hojas-de-estilos/Boton.css';

function Boton(props) {
    const esOperador= valor =>{
        return isNaN(valor) && (valor != '.') && (valor != '=')
    };

    return(
  <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
   onClick={ () =>props.manejarClic(props.children)} >
    {props.children}

  </div>
  );
}

export default Boton;


/*  <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`}>*/

/*onClick={ () =>props.manejarClick(props.children)}
Es una funcion anonima
*/