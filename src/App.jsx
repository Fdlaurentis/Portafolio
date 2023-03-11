import './App.css'
import { About, Contact, Home, Portfolio, Stack } from './page'
import { HashRouter, Route, Routes } from 'react-router-dom'
import NavBar from './componentes/NavBar/NavBar'
import { useState } from 'react'

function App() {

  const [theme, setTheme] = useState(true)

  return (
    <div className={`App ${theme ? 'themeDark' : 'themeLigth'}`}>
      <div className='themeCont'>
        <span style={{ fontWeight: 'bold', fontSize: '25px' }}>
          Tema
        </span>
        <div
          className='theme'
          style={{
            background: theme ? '#020912' : '#ffffff',
            border: theme ? '1px solid #ffffff' : '1px solid #52bd89'
          }}
          onClick={() => setTheme(!theme)}
        >
          <div
            style={{
              background: theme ? '#ffffff' : '#52bd89',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onClick={() => setTheme(!theme)}
            className={`${theme ? 'sliceLeft' : 'sliceRigth'}`}
          >
            {
              theme
                ? <i
                  className="fa-regular fa-moon"
                  style={{ color: '#020912' }}
                ></i>
                : <i
                  className="fa-solid fa-sun"
                  style={{ color: '#ffffff' }}
                ></i>
            }
          </div>
        </div>
      </div>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home theme={theme} />} />
          <Route path='/about' element={<About />} />
          <Route path='/stack' element={<Stack theme={theme} />} />
          <Route path='/portfolio' element={<Portfolio theme={theme} />} />
          <Route path='/contact' element={<Contact theme={theme} />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
