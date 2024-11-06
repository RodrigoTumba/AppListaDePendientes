import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { EliminarTareas } from "../api/tareas_api";

export function TareasCard({ tarea, onEliminar }) {
    const navigate = useNavigate();
    const [checked, setChecked] = useState(tarea.flag);

    const handleCheckboxChange = async () => {
        const nuevoEstado = !checked;
        setChecked(nuevoEstado);


        if (nuevoEstado) {
            try {
                await EliminarTareas(tarea.id); 
                onEliminar(tarea.id); 
            } catch (error) {
                console.error("Error al eliminar la tarea:", error);
            }
        }
    };

    return (
        <div className="tareas-card">
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={handleCheckboxChange}
                    />
                </label>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column', // Cambia a 'row' si deseas que estén en fila
                justifyContent: 'space-between', // Distribuye el espacio entre elementos
                alignItems: 'flex-start', // Alinea elementos al inicio
                height: '100%' // Asegúrate de que tenga altura suficiente para el espacio
            }}
                onClick={() => {
                    navigate(`/Tareas/${tarea.id}`);
                }}
            >
                <h1>Titulo: {tarea.titulo}</h1>
                <p>Descripcion: {tarea.descripcion}</p>
                <p>Lista de Tareas: {tarea.ListaDeTareas}</p>
            </div>
        </div>
    );
}

  //<p>Flag: {tarea.flag ? 'Hecho' : 'Por Hacer'}</p>