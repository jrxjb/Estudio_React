import React, {useState} from 'react';
import TareaFormulario from './TareaFormulario';
import '../hojas-de-estilo/ListaDeTareas.css';
import Tarea from './tarea';

//tarea.texto.trim() para saber que no esta vacia, quita los espacios del principio y final 

function ListaDeTareas() {
  
  const[tareas,setTareas] = useState([]);
  const agregarTarea = tarea => {
    if (tarea.texto.trim()){
      tarea.texto=tarea.texto.trim();

    }
  }
  return (
      <>
        <TareaFormulario onSubmit={agregarTarea}/>
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