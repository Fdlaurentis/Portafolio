import './App.css'
import { About, Home } from './page'
import { HashRouter, Route, Routes } from 'react-router-dom'
import NavBar from './componentes/NavBar/NavBar'
import { useState } from 'react'

function App() {

  const [theme, setTheme] = useState(true)

  return (
    <div className={`App ${theme ? 'themeDark' : 'themeLigth'}`}>
      <div className='themeCont'>
        <span>
          Dark <i className="fa-regular fa-moon"></i>
        </span>
        <div
          className='theme'
          style={{
            background: theme ? '#020912' : '#ffffff',
            border: theme ? '1px solid #ffffff' : '1px solid #020912'
          }}
          onClick={() => setTheme(!theme)}
        >
          <div
            style={{ background: theme ? '#ffffff' : '#020912' }}
            onClick={() => setTheme(!theme)}
            className={`${theme ? 'sliceLeft' : 'sliceRigth'}`}
          ></div>
        </div>
        <span>
          Ligth <i className="fa-solid fa-sun"></i>
        </span>
      </div>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
