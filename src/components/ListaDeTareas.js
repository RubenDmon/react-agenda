import React from 'react';
import TareaForm from './TareaForm.js';
import Tarea from './Tarea.js';
import '../styles/ListaDeTareas.css';

import { useState } from 'react';

export const ListaDeTareas=()=>{
  // Obtener nombres guardados
  const savedList = JSON.parse(localStorage.getItem('tareas')) || [];

 const [tareas,setTareas]=useState(savedList);

  const agregarTarea=(tarea)=>{
    if(tarea.texto.trim()){
      tarea.texto=tarea.texto.trim();
      const tareasActualizadas=[tarea,...tareas];
      setTareas(tareasActualizadas);
      localStorage.setItem('tareas', JSON.stringify(tareasActualizadas));
    }
  };
  const eliminarTareas=(id)=>{
      const tareasActualizadas=tareas.filter(tarea => tarea.id !== id);
      setTareas(tareasActualizadas);
      localStorage.setItem('tareas', JSON.stringify(tareasActualizadas));
  };
  const completarTareas=(id)=>{
    const tareasActualizadas= tareas.map(tarea=>{
      if(tarea.id===id){
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
    localStorage.setItem('tareas', JSON.stringify(tareasActualizadas));
  };
  return(
        // fragmentos
    <>
      <TareaForm
      onSubmit={agregarTarea}
      />
     <div className='tareas-lista-contenedor'>
      {
        tareas.map((tarea)=>{
          return(
          <Tarea
          key={tarea.id}
          id={tarea.id}
          texto={tarea.texto}
          completada={tarea.completada}
          eliminarTarea={eliminarTareas}
          completarTarea={completarTareas}
          />);
        }
        )
      }
    </div> 
    </>
    
  );
};