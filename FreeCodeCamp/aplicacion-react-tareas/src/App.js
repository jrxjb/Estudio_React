import freeCodeCampLogo from './imagenes/FCC-logo.png'
import './App.css';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freeCodeCampLogo} 
          classname='freecodecamp-logo' />

      </div>
    </div>
  );
}

export default App;
