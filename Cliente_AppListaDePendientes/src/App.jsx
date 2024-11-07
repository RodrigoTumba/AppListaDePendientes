import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { TareasPages } from './pages/TareasPages';
import { TareasFormPages } from './pages/TareasFormPages';
import { ListasPages } from './pages/ListasPages';
import { TareasPorListaPage } from './pages/TareasPorListaPage';
import { ListasFormPages } from './pages/ListasFormPages'
import {Navigation} from './components/Navigation';
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <br /><br /><br />
      <Routes>
        <Route path="/" element={<Navigate to="/Listas"/>}/>
        <Route path="/Tareas" element={<TareasPages/>} />
        <Route path="/Tareas-create" element={<TareasFormPages/>}/>
        <Route path="/Tareas/:id" element={<TareasFormPages/>}/>
        <Route path="/Listas" element={<ListasPages/>}/>
        <Route path="/Listas/:listaId/Tareas" element={<TareasPorListaPage />} />
        <Route path="/Listas-create" element={<ListasFormPages/>}/>
      </Routes>
      <Toaster/>
    </BrowserRouter>
  )
}

export default App
