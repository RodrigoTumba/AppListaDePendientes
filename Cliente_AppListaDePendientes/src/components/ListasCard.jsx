import { useNavigate } from "react-router-dom";


export function ListasCard({ lista }) {
    const navigate = useNavigate();

    return (
        <div className="tareas-card">
            <div style={{
                display: 'flex',
                flexDirection: 'column', // Cambia a 'row' si deseas que estén en fila
                justifyContent: 'space-between', // Distribuye el espacio entre elementos
                alignItems: 'flex-start', // Alinea elementos al inicio
                height: '100%' // Asegúrate de que tenga altura suficiente para el espacio
            }}
                onClick={() => {
                    navigate(`/Listas/${lista.id}`);
                }}
            >
                <h1>Titulo: {lista.titulo}</h1>
            </div>
        </div>
    );
}
