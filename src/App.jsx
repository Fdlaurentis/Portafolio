import './App.css'
import { DatosPersonales, NavBar, Portafolio} from './componentes'



function App() {

  return (
    <div className="App container my-2">      
      <NavBar />
      <DatosPersonales />     
      <Portafolio />
    </div>
  )
}

export default App
