import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card } from '../components/card';


export const SearchItem = () => {

const [meal, setMeal] = useState([])
    const [searchParmamas] = useSearchParams();
    const queryTerm = searchParmamas.get("q")

    console.log(queryTerm)

    useEffect(() => {

        async function Meals() {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${queryTerm}`);
            const json = await response.json();
            setMeal(json.meals)

        }

     Meals();

    }, [queryTerm])



    console.log(meal)





  return (

    

    <main className=' pt-14 gap-12  flex-col items-center max-md:items-center md:flex dark:bg-slate-800 flex items-top justify-center'>

<p className=' text-3xl text-gray-700 dark:text-white'>{meal ==null? `No results found for ${queryTerm}` :`Results for ${queryTerm}`}</p>




        {meal && meal.map((info, index)=>{
            
           return  <Card key={index}info={info} />

        }
        )}




    </main>
  )
}
