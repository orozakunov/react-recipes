import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import useTheme from '../../hooks/useTheme'

import './style.css'

const Recipe = () => {
    const { mode } = useTheme()
    const { id } = useParams()

    const { data, isPending, error } = useFetch('http://localhost:3100/recipes/' + id) 
    return(
        <div className={`recipe ${mode}`}>
            {error && <div className='error'>{error}</div>}
            {isPending && <div className='loading'>Идет загрузка...</div>}
            {data && 
            <>
            {data && (
                <>
                <h2 className="page">{data.title}</h2>
                <p>Takes {data.cookingTime} minutes to cook</p>
                <ul>
                    {data.ingredients.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                    ))}
                </ul>
                <p className="method">{data.method}</p>
                </>
            )}
            </>}
        </div>
    )
}

export default Recipe