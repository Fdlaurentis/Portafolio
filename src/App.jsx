import './App.css'
import circuito from './images/circuito.png'
import { AcercaDeMi, Contactame, Habilidades, Home, NavBar, Portafolio } from './componentes'
import {HashRouter, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        <img src={circuito} className='imgBg'/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/acerca' element={<AcercaDeMi />}/>
          <Route path='/habilidades' element={<Habilidades />}/>
          <Route path='/portafolio' element={<Portafolio />}/>
          <Route path='/contacto' element={<Contactame />}/>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
