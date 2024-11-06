import { useEffect } from 'react';
import {useForm} from 'react-hook-form';
import '../App.css';
import {CrearTareas, EliminarTareas, ActualizarTareas, ObtenerTarea} from "../api/tareas_api";
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export  function TareasFormPages() {
    const {register, handleSubmit , formState:{errors}, setValue}= useForm();
    const Navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async data =>{
       if(params.id){
       await ActualizarTareas(params.id,data);
       toast.success('Tarea Actualizada',{
        position: "bottom-right",
        style: {
            background: "#101010",
            color: "#fff"
        }
   });
       }else{
       await CrearTareas(data);
       toast.success('Tarea creada',{
            position: "bottom-right",
            style: {
                background: "#101010",
                color: "#fff"
            }
       });
       }
       Navigate("/Tareas")
    })

    useEffect(() =>{
        async function CargarTarea(){
            if(params.id){
                
                const res=await ObtenerTarea(params.id);
                setValue('titulo',res.data.titulo)
                setValue('descripcion',res.data.descripcion)
                setValue('flag',res.data.flag)
                setValue('ListaDeTareas',res.data.ListaDeTareas)
            }
        }
        CargarTarea();
    },[])

    return (
    <div class='container-done'>
      <form onSubmit={onSubmit}>
        <label htmlFor="">Titulo: </label>
        <input type="text" placeholder="titulo" 
        {...register("titulo",{required: true})}
        />
        {errors.titulo && <span>El titulo es requerido</span>}
        <label htmlFor="">Descripcion: </label>
        <textarea name="" id="" rows="3" placeholder="Descripcion"
         {...register("descripcion",{required: true})}
        ></textarea>
         <label>¿Hecho?</label>
        <input 
        type="checkbox" 
        {...register("flag")} 
        />
         <label>Lista de Tareas:</label>
        <input 
        type="number" 
        placeholder="Lista de Tareas" 
        {...register("ListaDeTareas", { required: true, min: 0 })}
        />
        {errors.ListaDeTareas && <span>La Lista de Tareas es requerida y debe ser mayor o igual a 0</span>}   

         {errors.descripcion && <span>La descripcion es requerida</span>}
         <button disabled="" type="submit" class="btn-guardar text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
    <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
    </svg>
    Guardar
</button>
    </form>
     
      {params.id && (<button className="btn-eliminar" onClick={async () => {
                    const aceptado = window.confirm('¿Estás seguro que deseas eliminar este pendiente?');
                        if (aceptado) {
                            await EliminarTareas(params.id);
                            toast.success('Tarea Eliminada', {
                                position: "bottom-right",
                                style: {
                                    background: "#101010",
                                    color: "#fff"
                                }
                            });
                            navigate("/Tareas");
                        }
                    }}
                >
                    <span className="text">Delete</span>
                    <span className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                        </svg>
                    </span>
                </button>
            )}
        </div>
        
    );
}