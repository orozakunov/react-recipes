import React from 'react'
import { useLocation } from 'react-router-dom'
import {useFetch} from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList/RecipeList'
import './style.css'

const Search = () => {
    const queryString = useLocation().search

    const queryParams = new URLSearchParams(queryString)
    const query = queryParams.get('q')

    const url = `http://localhost:3100/recipes?q=${query}`

    const { data, isPending, error } = useFetch(url)
    return(
        <div>
            {error && <div className='error'>{error}</div>}
            {isPending && <div className='loading'>Loading...</div>}
            {data && <RecipeList recipes={data} />}
        </div>
    )
}

export default Search