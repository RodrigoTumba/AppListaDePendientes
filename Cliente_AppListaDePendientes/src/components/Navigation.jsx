import {Link} from 'react-router-dom'
import '../App.css';
export function Navigation() {
  return (
    <div className="container">
    <div className='card-to-do'>
      <Link to='/Listas'> 
      <h1>Listas de Tareas</h1>
      </Link>
      <br /><br />
      <Link to='/Listas-create'><p>Crear Lista</p></Link>
      <Link to='/Tareas-create'><p>Crear Tarea</p></Link>   
    </div>
    </div>
  )
}
