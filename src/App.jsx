import './App.css'
import { Contactame, Habilidades, Home, NavBar, Portafolio } from './componentes'
import {HashRouter, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <div className="App container my-2">
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/habilidades' element={<Habilidades />}/>
          <Route path='/portafolio' element={<Portafolio />}/>
          <Route path='/contacto' element={<Contactame />}/>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
