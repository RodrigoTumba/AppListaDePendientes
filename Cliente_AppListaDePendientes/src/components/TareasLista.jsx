import { useEffect , useState} from "react"
import {ObtenerTodasLasTareas} from "../api/tareas_api"
import {TareasCard} from './TareasCard'

export function TareasLista() {

    const [tareas, EnviarTareas] = useState([])

    useEffect(() =>{
       
       async function CargarTareas() {
            const res= await ObtenerTodasLasTareas();
            EnviarTareas(res.data)
        }
        CargarTareas();

    },[]);

    const eliminarTarea = (id) => {
        EnviarTareas(tareas.filter(tarea => tarea.id !== id));
    };


    return <div className="container-card"> 
          <h2>Total de Tareas Pendientes: {tareas.length}</h2>
          <br />
    {tareas.map( tarea=>(
        <TareasCard key={tarea.id} tarea={tarea} onEliminar={eliminarTarea}/>
    ))} </div>;
  
}

