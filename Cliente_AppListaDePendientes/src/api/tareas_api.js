import axios from 'axios'

const ApiTareas = axios.create({
    baseURL:"http://localhost:8000/api/v1/Tareas/"
})


const ApiLista = axios.create({
    baseURL:"http://localhost:8000/api/v1/ListaTareas/"
})

export const ObtenerTareasPorLista = (listaId) => {
    const res = ApiLista.get(`/${listaId}/Tareas/`);
    return res;
};

export const ObtenerTodasLasTareas = () => {
    //const res = axios.get('http://localhost:8000/api/v1/Tareas/')
    const res = ApiTareas.get('/')
    return res;
}



export const ObtenerTarea = (id) => {
    //const res = axios.get('http://localhost:8000/api/v1/Tareas/')
    const res = ApiTareas.get(`/${id}/`)
    return res;
}


export const CrearTareas = (tarea) => {
   // const res = axios.post('http://localhost:8000/api/v1/Tareas/')
    const res = ApiTareas.post('/',tarea)
    return res;
}

export const  EliminarTareas = (id) => {
    const res = ApiTareas.delete(`/${id}/`)
    return res;
}

export const ActualizarTareas = (id,tarea) =>{
    const res = ApiTareas.put(`/${id}/`,tarea)
    return res;
}

export const ObtenerTodasLasListas = () => {
    const res = ApiLista.get('/')
    return res;
}

export const ObtenerLista = (id) => {
    const res = ApiLista.get(`/${id}/`)
    return res;
}

export const CrearLista = (lista) => {
     const res = ApiLista.post('/',lista)
     return res;
 }

 export const  EliminarLista = (id) => {
    const res = ApiLista.delete(`/${id}/`)
    return res;
}

export const ActualizarLista = (id,lista) =>{
    const res = ApiLista.put(`/${id}/`,lista)
    return res;
}


