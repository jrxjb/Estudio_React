import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador.jsx';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import { useState } from 'react';




function App() {

  const [numClicsV, SetNumClics] = useState(0);

  const manejarClic = () => {
    SetNumClics(numClicsV+1);
  }
   const reiniciarContador =() =>{
    SetNumClics(0);
   }



  return (
    <div className='App'>
        <div className='freecodecamp-logo-contenedor' >
          <img
            className='freecodecamp-logo'
            src={freeCodeCampLogo}
            alt='Logo de freeCodeCamp'
          />
        </div>

        <div className='contenedor-principal'>
        <Contador 
        numClics={numClicsV} /**/
        />
        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}
          />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
        </div>

    </div>
  );
}

export default App;
