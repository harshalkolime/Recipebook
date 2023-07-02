import React from 'react'
import { useState, useEffect } from 'react'
import { Card } from '../components/card'

export const MealList = () => {

    const [data, setData] = useState([])


    useEffect(() => {

        async function Meals() {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
            const json = await response.json();
            setData(json.meals)

        }

        Meals();

    }, [])


    console.log(data)
    
     return (





        <main className=' dark:bg-slate-700 flex flex-wrap items-center justify-center gap-6' >


            <div className='  text-black dark:text-white text-4xl'> <h1>Few Recomendations for you</h1></div>

            <div className=' dark:bg-slate-700 flex flex-wrap items-center justify-center gap-6'>
            {data.map((info)=>(

<Card key={info.idMeal} info={info}   />

))}

            </div>

       
   </main>
    )
    }