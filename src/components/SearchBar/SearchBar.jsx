import React from 'react'
import { useNavigate } from 'react-router-dom'

import './style.css'

const SearchBar = () => {
    const [term, setTerm] = React.useState('')
    const navigate = useNavigate();

    const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search?q=${term}`)
    }

    return (
        <div className='searchbar'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='search'>Search:</label>
                <input
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                id='search'
                type="text"
                required
                 />
            </form>
        </div>
    )
}

export default SearchBar