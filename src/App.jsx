import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './pagesStyle/tabletSize.css'
import './pagesStyle/pcSize.css'
import './pagesStyle/wideScreen.css'
import Header from './components/Header'
import ProtectedRoutes from './components/ProtectedRoutes'
import CharacterInfo from './pages/CharacterInfo'
import Characters from './pages/Characters'
import Home from './pages/Home'
import LocationInfo from './pages/LocationInfo'
import Locations from './pages/Locations'

function App() {
  const [darkMode,setDarkMode] = useState(false)

  return (
    <HashRouter>

    <div className={darkMode? "dark-mode" : "light-mode"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>

      <Routes>
        <Route path="/" element={<Home darkMode={darkMode}/>}/>
        <Route element={<ProtectedRoutes/>}>

         <Route path="/locations" element={<Locations darkMode={darkMode}/>}/>
         <Route path="/location/:id" element={<LocationInfo darkMode={darkMode}/>}/>
         <Route path="/characters" element={<Characters darkMode={darkMode}/>}/>
         <Route path="/character/:id" element={<CharacterInfo darkMode={darkMode}/>}/>

        </Route>
      </Routes>

    </div>
    
    </HashRouter>
  )
}

export default App
