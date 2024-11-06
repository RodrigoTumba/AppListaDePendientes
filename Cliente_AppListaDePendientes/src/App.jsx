import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { TareasPages } from './pages/TareasPages';
import { TareasFormPages } from './pages/TareasFormPages';
import { ListasPages } from './pages/ListasPages';
import {Navigation} from './components/Navigation';
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <br /><br /><br />
      <Routes>
        <Route path="/" element={<Navigate to="/Tareas"/>}/>
        <Route path="/Tareas" element={<TareasPages/>} />
        <Route path="/Tareas-create" element={<TareasFormPages/>}/>
        <Route path="/Tareas/:id" element={<TareasFormPages/>}/>
        <Route path="/Listas" element={<ListasPages/>}/>
        {/* <Route path="/Listas/:id" element={<ListaDeTareasPorLista />} />  */}
      </Routes>
      <Toaster/>
    </BrowserRouter>
  )
}

export default App
