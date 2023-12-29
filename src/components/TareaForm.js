import React,{useState} from 'react';
import '../styles/Tareaform.css';
import { v4 as uuidv4 } from 'uuid';
function TareaForm(props){

    const [input,setInput]=useState('');

    const manejarCambio=(e)=>{
        setInput(e.target.value);
    }
    const manejarEnvio=(e)=>{
        e.preventDefault();
        
        const tareaNueva={
            id:uuidv4(),
            texto: input,
            completada:false
        };
        
        props.onSubmit(tareaNueva);
    };
    return(
        <form className='tarea-formulario'
        onSubmit={manejarEnvio} >
            <input
                className='tarea-input'
                type='text'
                placeholder='escribe tu proposito'
                name='texto'
                onChange={manejarCambio}
            />
            <button className='tarea-boton'>
                Añadir proposito
            </button>
        </form>
    );
};
export default TareaForm;