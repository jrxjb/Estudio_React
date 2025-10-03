import './App.css';
import freeCodeCampLogo from './imagenes/FCC_LOGO.png';
import Tarea from './componentes/tarea.js';
import TareaFormulario from './componentes/TareaFormulario.js';
import ListaDeTareas from './componentes/ListaDeTareas.js';
// SOLO POR PRUEBA 
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="aplicacion-tareas">
      <div className="freecodecamp-logo-contenedor">
        <img 
          src={freeCodeCampLogo} 
          className="freecodecamp-logo" 
        />
      </div>
      <div className='tarea-lista-logo'>
        <h1>Mis tareas</h1>
          <ListaDeTareas/>

      </div>




    </div>
  );
}

export default App;
