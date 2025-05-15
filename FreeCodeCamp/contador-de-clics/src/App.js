import './App.css';
import Boton from './componentes/Boton.jsx';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';

function App() {

  const manejarClic = () => {
    console.log("Clic")
  }
   const reiniciarContador =() =>{
    console.log('Reiniciar')
   }

  return (
    <div className='App'>
      <div classNmae='freecodecamp-logo-contenedor' >
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'
        />
      </div>
      <div className='contenedor-principal'>
       <Boton 
        texto='Clic'
        esbotonDeClic={true}
        manejarClic={manejarClic}
        />
       <Boton
        texto='Reiniciar'
        esbotonDeClic={false}
        manejarClic={reiniciarContador}
       />
      </div>

    </div>
  );
}

export default App;
