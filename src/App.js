import './styles/App.css';
import Logo from './images/freecodecampLogo.png';
import Tarea from './components/Tarea.js';
import TareaForm  from './components/TareaForm.js';

import { ListaDeTareas } from './components/ListaDeTareas.js';
function App() {
  return (
    <div className="App-Tareas">
      <div className='freecodecampLogo-container'>
        <img
        src={Logo}
        className='freecodecampLogo'
        />
      </div>

      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas/>
      </div>
      
    </div>
  );
}

export default App;
