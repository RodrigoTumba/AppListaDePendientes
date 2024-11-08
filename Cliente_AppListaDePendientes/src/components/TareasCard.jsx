import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { EliminarTareas } from "../api/tareas_api";

export function TareasCard({ tarea, tituloLista, onEliminar }) {
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
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                height: '100%'
            }}
                onClick={() => {
                    navigate(`/Tareas/${tarea.id}`);
                }}
            >
                <h1>Titulo: {tarea.titulo}</h1>
                <p>Descripcion: {tarea.descripcion}</p>
                <p>Lista de Tareas: {tituloLista}</p>
            </div>
        </div>
    );
}

  //<p>Flag: {tarea.flag ? 'Hecho' : 'Por Hacer'}</p>