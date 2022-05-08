import React, { useEffect } from 'react'
import RecipeList from '../../components/RecipeList/RecipeList'
import {useFetch} from '../../hooks/useFetch'

import './style.css'

const Home = () => {
  const { data, isPending, error } = useFetch('http://localhost:3100/recipes') 
  return(
    <div className='home'>
      {error && <div className='error'>{error}</div>}
      {isPending && <div className='loading'>Идет загрузка...</div>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}

export default Home