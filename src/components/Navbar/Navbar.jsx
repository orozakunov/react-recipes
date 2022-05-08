import React from 'react'
import { Link } from 'react-router-dom'
import useTheme from '../../hooks/useTheme'
import SearchBar from '../SearchBar/SearchBar'
import './style.css'

const Navbar = () => {
  const { color } = useTheme()

    return (
        <div className="navbar" style={{background:color}}>
        <nav>
            <Link to='/' className='brand'>
              <h1>Сергеевские рецепты</h1>
            </Link>
            <SearchBar />
            <Link to='/create'>Создать рецепт</Link>
        </nav>
      </div>
    )
}

export default Navbar