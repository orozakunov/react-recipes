import React, { useContext } from 'react'

import Home from './pages/Home/Home'
import Create from './pages/Create/Create'
import Recipe from './pages/Recipe/Recipe'
import Search from './pages/Search/Search'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ThemeSelector from './components/ThemeSelector/ThemeSelector'
import useTheme from './hooks/useTheme'

function App() {
  const { mode } = useTheme()
  return (
      <div className={`App ${mode}`}>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/create' element={<Create />}/>
          <Route path='/recipe/:id' element={<Recipe />}/>
          <Route path='/search' element={<Search />}/>
        </Routes>
      </div>
  )
}

export default App
