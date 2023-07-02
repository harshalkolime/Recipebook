import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const MealDetails = () => {
  const params = useParams();
  const [meal, setMeal] = useState({});

  // const [data, setData] = useState();

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
      );
      const json = await response.json();
      setMeal(json.meals[0]);
    }
    fetchMeals();



    // let data? (meal) : ""



  }, [params]);


  console.log(meal)

  // const filteredObj = Object.fromEntries(
  //   Object.entries(meal).filter(([key, value]) => key.startsWith("strIngredient"))
  // );

// console.log(filteredObj)
  return (
    <main className=' pt-14 gap-12  flex-col items-center max-md:items-center md:flex dark:bg-slate-800 flex items-top justify-center'>
      <div className=' rounded-sm'>
        <img className='w-72 rounded-lg' src={meal.strMealThumb} alt='' />
      </div>
      <div className=' dark:text-white gap-12 items-center flex flex-col '>
        <h1 className='text-4xl font-bold '>{meal.strMeal}</h1>

        
              <p>{meal.strInstructions}</p>              
            

     

      </div>
    </main>
  );
};
