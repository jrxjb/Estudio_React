import React from 'react';
import '../Hojas-de-estilo/testimonio.css';

export function Testimonio(){
  return(
    <div className='contenedor-testimonio'>
        <img 
        className='imagen-testimonio' src={require('../imagenes/Emma.png')}
        alt='Emma FreecodeCamp'
        />
        <div className='contenedor-texto-testimonio'>
    <p className='nombre-testimonio'> Emma Bostian en suecia </p>
    <p className='cargo-testimonio'>Ingeniera de software en spotify</p>
    <p className='texto-testimonio'>"I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."</p>
        </div>
    </div>

  );
}

//export default Testimonio;

