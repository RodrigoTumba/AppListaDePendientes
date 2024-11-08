import { useEffect, useState } from "react";
import { ObtenerTodasLasTareas, ObtenerTodasLasListas } from "../api/tareas_api";
import { TareasCard } from './TareasCard';

export function TareasLista() {
    const [tareas, EnviarTareas] = useState([]);
    const [listas, setListas] = useState([]); 

    useEffect(() => {
        async function CargarTareas() {
            const res = await ObtenerTodasLasTareas();
            EnviarTareas(res.data);
        }
        async function CargarListas() {
            const res = await ObtenerTodasLasListas();
            setListas(res.data || []); 
        }

        CargarTareas();
        CargarListas();
    }, []);

    const eliminarTarea = (id) => {
        EnviarTareas(tareas.filter(tarea => tarea.id !== id));
    };

    const obtenerTituloLista = () => {
        if (tareas.length > 0 && listas.length > 0) {
            const listaId = tareas[0].ListaDeTareas; // Asumiendo que cada tarea tiene `ListaDeTareas` como el id de la lista
            const lista = listas.find(lista => lista.id === listaId);
            return lista ? lista.titulo : "Lista no encontrada";
        }
        return "No hay tareas o listas disponibles";
    };

    return (
        <div className="container-card">
            <h1>Lista : {obtenerTituloLista()} </h1>
            <h2>Total de Tareas Pendientes: {tareas.length}</h2>
            <br />
            {tareas.map(tarea => (
                <TareasCard 
                    key={tarea.id} 
                    tarea={tarea} 
                   listas={listas} 
                    onEliminar={eliminarTarea} 
                />
            ))}
        </div>
    );
}
