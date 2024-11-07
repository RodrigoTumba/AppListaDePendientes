import { useEffect , useState} from "react"
import {ObtenerTareasPorLista} from "../api/tareas_api"
import { useParams } from 'react-router-dom';
import {TareasCard} from './TareasCard'

export function TareasPorLista() {

    const [tareas, EnviarTareas] = useState([])
    const params = useParams();

    useEffect(() =>{
       
       async function CargarTareas() {
            const res= await ObtenerTareasPorLista(params.listaId);
            EnviarTareas(res.data);
            console.log(res.data);
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
