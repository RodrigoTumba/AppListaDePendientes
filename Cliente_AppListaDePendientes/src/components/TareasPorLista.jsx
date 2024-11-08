import { useEffect, useState } from "react";
import { ObtenerTareasPorLista, ObtenerLista } from "../api/tareas_api";
import { useParams } from 'react-router-dom';
import { TareasCard } from './TareasCard';

export function TareasPorLista() {
    const [tareas, EnviarTareas] = useState([]);
    const [tituloLista, setTituloLista] = useState(""); 
    const params = useParams();

    useEffect(() => {
        async function CargarTareas() {
            const res = await ObtenerTareasPorLista(params.listaId);
            EnviarTareas(res.data);
            console.log(res.data);
        }

        async function CargarTituloLista() {
            const res = await ObtenerLista(params.listaId);
            console.log(res.data.titulo); 
            setTituloLista(res.data.titulo); 
        }

        CargarTareas();
        CargarTituloLista();
    }, [params.listaId]);

    const eliminarTarea = (id) => {
        EnviarTareas(tareas.filter(tarea => tarea.id !== id));
    };

    return (
        <div className="container-card">
            <h1>Lista: {tituloLista}</h1>
            <h2>Total de Tareas Pendientes: {tareas.length}</h2>
            <br />
            {tareas.map(tarea => (
                <TareasCard 
                    key={tarea.id} 
                    tarea={tarea} 
                    tituloLista={tituloLista}
                    onEliminar={eliminarTarea} 
                />
            ))}
        </div>
    );
}