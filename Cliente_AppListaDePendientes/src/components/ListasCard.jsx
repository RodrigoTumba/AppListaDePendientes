import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { EliminarLista } from "../api/tareas_api";

export function ListasCard({ lista , onDelete }) {
    const navigate = useNavigate();
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = async () => {
        const nuevoEstado = !checked;
        setChecked(nuevoEstado);


        if (nuevoEstado) {
            try {
                await EliminarLista(lista.id); 
                onDelete(lista.id); 
            } catch (error) {
                console.error("Error al eliminar la lista:", error);
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
                navigate(`/Listas/${lista.id}/Tareas`);
            }}
        >   
            <h1 style={{ marginLeft: '10px' }}>Titulo: {lista.titulo}</h1>
        </div>
    </div>

    );
}
