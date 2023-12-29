import React from 'react';
import '../styles/Tarea.css';
// colosed eye
import { RxEyeClosed } from "react-icons/rx";

// open eye
import { FaEye } from "react-icons/fa";

import { useState } from 'react';

function Tarea( { id ,texto , completada , completarTarea, eliminarTarea} ){

    const [isFirstIcon, setFirstIcon] = useState(true);
  
    const handleIconChange = () => {
      setFirstIcon(!isFirstIcon);
    };
  
    const currentIcon = isFirstIcon ? <RxEyeClosed className='tarea-icono'/>   : <FaEye className='tarea-icono hide'/>  ;

  return(
      <div className={completada? 'tarea-contenedor completada':'tarea-contenedor'} onMouseEnter={handleIconChange} onMouseLeave={handleIconChange}>
       <div className='tarea-texto' onClick={()=>completarTarea(id)}>
        {texto}
        </div> 
        <div className='tarea-contenedor-iconos' onClick={()=>{eliminarTarea(id)}} >
        {currentIcon}
        </div>
      </div>
  );
}
export default Tarea;