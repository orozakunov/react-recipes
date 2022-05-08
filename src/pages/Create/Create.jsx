import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './style.css'
import useTheme from '../../hooks/useTheme'
import { Link } from 'react-router-dom'

const Create = () => {
    const { mode } = useTheme()
    const [ title, setTitle ] = useState('')
    const [ ingredients, setIngredients ] = useState('')
    const [ method, setMethod ] = useState('')
    const [ cookingTime, setCookingTime ] = useState('')

    const handleCreate = async () => {
        await axios.post('http://localhost:3100/recipes',
        {
            title:title,
            ingredients:[ingredients], 
            method:method,
            cookingTime:cookingTime
        })
    }
    

    return(
        <div className={`create ${mode}`}>
           <form onSubmit={handleCreate}>
               <label>Title</label>
               <input onChange={(e) => setTitle(e.target.value)} required type="text" />
               <label>Ingredients</label>
               <input placeholder='Вводите через "," ' onChange={(e) => setIngredients(e.target.value)} required type="text" />
               <label>Method</label>
               <input onChange={(e) => setMethod(e.target.value)} required type="text" />
               <label>Cooking Time</label>
               <input placeholder='Вводите количество минут ' onChange={(e) => setCookingTime(e.target.value)} required type="number" />
               <Link to='../'><button onClick={handleCreate}>Submit</button></Link>
           </form>
        </div>
    )
}

export default Create