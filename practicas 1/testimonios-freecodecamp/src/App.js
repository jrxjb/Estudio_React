import './App.css';
import {Testimonio} from './componentes/Testimonio.jsx';

function App() {
  return (
  <div className="App">
      <div className='contenedor-principal'>
      <h1>Esto es lo que nuestros exalumnos dicen sobre freeCodeCamp:</h1>
     
     <Testimonio
      nombre='Shawn Wang'
      pais='Singapur'
      imagen='shawn'
      cargo='Ingeniero De Software'
      empresa='Amazon'
      altFoto='Foto de Shawn'
      testimonio={
        <>
        Da miedo cambiar de carrera. Solo adquirí la confianza de poder programar gracias a las cientos de horas de lecciones gratuitas de freeCodeCamp. En un año, conseguí un trabajo de seis cifras como ingeniero de software. <strong>freeCodeCamp</strong> me cambió la vida.
        </>
      }
      />
      <Testimonio
      nombre='Sarah Chimena'
      pais='Nigeria'
      imagen='Sarah'
      cargo='Ingeniero de Software'
      empresa='ChatDesk'
       altFoto='Foto de Sarah'
      testimonio={
                  <>
        <strong>FreeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software.</strong> Su programa bien estructurado elevó mis conocimientos de programación desde un nivel principiante absoluto a un nivel de mucha confianza. Era todo lo que necesitaba para conseguir mi primer trabajo como desarrollador en una empresa increíble.
                  </>
                  }
        />
      <Testimonio 
     nombre='Emma Bostian'
     pais='Suecia'
     imagen='Emma'
     cargo='Ingeniera de software'
     empresa='Spotify'
     altFoto='Foto de Emma'
     testimonio = {
       <>
      Siempre me ha costado aprender JavaScript. Tomé muchos cursos, pero el de freeCodeCamp fue el que me impactó. Estudiar JavaScript, así como estructuras de datos y algoritmos en  <strong>freeCodeCamp, me dio las habilidades </strong> y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.
       </> 
    }
      />
      </div>
  </div>
  );
}

export default App;

