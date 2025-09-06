import './App.css';
import freeCodeCampLogo from './imagenes/FCC_LOGO.png';
import Tarea from './componentes/tarea.js';
function App() {
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
        <Tarea  texto='Aprender React'/>
      </div>

    </div>
  );
}

export default App;
