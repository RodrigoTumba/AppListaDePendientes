import { useEffect , useState} from "react"
import {ObtenerTodasLasListas} from "../api/tareas_api"
import {ListasCard} from './ListasCard'

export function ListaDeListas() {

    const [listas, EnviarListas] = useState([])

    useEffect(() =>{
       
       async function CargarListas() {
            const res= await ObtenerTodasLasListas();
            EnviarListas(res.data);
            console.log(res);
        }
        CargarListas();

    },[]);

    return <div className="container-card"> 
          <h2>Total de Listas: {listas.length}</h2>
          <br />
    {listas.map( lista=>(
        <ListasCard key={lista.id} lista={lista} />
    ))} </div>;
  
}
