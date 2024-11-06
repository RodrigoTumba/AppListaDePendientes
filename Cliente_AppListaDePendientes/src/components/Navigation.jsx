import {Link} from 'react-router-dom'
import '../App.css';
export function Navigation() {
  return (
    <div className="container">
    <div className='card-to-do'>
      <Link to='/Tareas'> 
      <h1>Listado de Tareas</h1>
      </Link>
      <br /><br />
      <Link to='/Tareas-create'><p>Crear Tarea</p></Link>
    </div>
    </div>
  )
}
