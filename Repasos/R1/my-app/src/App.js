import './App.css';
import { useState } from 'react';
import { DetailsF,DetailsF2 } from './components/Details.js'

export const App =() => {
  const nombre ="Henry";
  //usando un hook 
  const [nombre1, setNombre1] = useState("jose");
  const handleClick = () => {
  console.log('Funcion handleClick');
  setNombre1("Jose2");
                            };
  //trabajaremos con props

  return (
    <div className="App">

     <h1> Hola </h1>
     <div className="texto"> <h2>Texto {nombre}</h2></div>
     <button onClick={handleClick}> Click me</button>
     <div className="texto"> <h2>Texto {nombre1}</h2></div>
     <button onClick={handleClick}> Click para usar useState </button>

    <hr/>
     <div> props componentes</div>
     <DetailsF/>
     <DetailsF2 name={nombre} color={'Rojo'}/>







    </div>

  );
}


//Nota: Al quitar export defult app; 
// Tenemos crear la funcion flecha y en index.js el import se hace con import {app} from 'direccion'

/*
function App() {
  return (
    <div className="App">
     <h1> Hola </h1>
     <div className="texto"> <h2>Texto</h2></div>
    </div>
  );
}

export default App;
*/

// funcon de flecha dentro de un boton 
// <button onClick={() => console.log('clcik')}> Click me</button>