import React, {useState} from 'react';
import TareaFormulario from './TareaFormulario';
import '../hojas-de-estilo/ListaDeTareas.css';
import Tarea from './tarea';



function ListaDeTareas() {
  
  const[tareas,setTareas] = useState([]);
  const agregarTarea = tarea => {
    console.log('Tarea Agregada')
    console.log(tarea)
  }
  return (
      <>
        <TareaFormulario/>
        <div className='tareas-lista-contendor'>
          LISTA DE TAREAS
          {
            tareas.map((tarea)=> 
              <Tarea 
                texto={tarea.texto}
                completada={tarea.completada}
              />
            )
          }
        </div>
      </>
    );
}

export default ListaDeTareas;