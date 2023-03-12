import './App.css'
import { About, Contact, Home, Portfolio, Stack } from './page'
import { HashRouter, Route, Routes } from 'react-router-dom'
import NavBar from './componentes/NavBar/NavBar'
import { useState } from 'react'
import es from './assets/images/es.png'
import en from './assets/images/en.png'
import jsonEs from './assets/translator/Spanish.json'
import jsonEn from './assets/translator/English.json'

function App() {

  const [theme, setTheme] = useState(true)
  const [language, setLanguage] = useState(true)

  return (
    <div className={`App ${theme ? 'themeDark' : 'themeLigth'}`}>
      <div className="settings">
        <div className='themeCont'>
          <span style={{ fontWeight: 'bold', fontSize: '25px' }}>
            {language ? jsonEs.Page[0] : jsonEn.Page[0]}
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
                background: '#52bd89',
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
        <div className="language">
          <div
            className= 'contLanguage'
            style={{
              background: language && '#52bd89',
              borderRadius: '5px',
              padding: '4px'
            }}
            onClick={() => setLanguage(true)}
          >
            <img src={es} />
            <span >ES</span>
          </div>
          -
          <div
            className='contLanguage'
            style={{
              background: !language && '#52bd89',
              borderRadius: '5px',
              padding: '4px'
            }}
            onClick={() => setLanguage(false)}
          >
            <span >EN</span>
            <img src={en} />
          </div>
        </div>
      </div>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home
            theme={theme}
            language={language ? jsonEs : jsonEn}
          />} />
          <Route path='/about' element={<About
            theme={theme}
            language={language ? jsonEs : jsonEn}
          />} />
          <Route path='/stack' element={<Stack
            theme={theme}
            language={language ? jsonEs : jsonEn}
          />} />
          <Route path='/portfolio' element={<Portfolio
            theme={theme}
            language={language ? jsonEs : jsonEn}
          />} />
          <Route path='/contact' element={<Contact
            theme={theme}
            language={language ? jsonEs : jsonEn}
          />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
