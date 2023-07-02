import React from 'react'
import { Routes, Route } from 'react-router'
import { MealList } from '../pages/mealList'
import { MealDetails } from '../pages/MealDetails'
import { SearchItem } from '../pages/searchitem'
export const AllRoutes = () => {
  return (
    <>

      <Routes>

        <Route path='/' element={<MealList/>} />
        <Route path="/meal/:id" element={<MealDetails/>} />
        <Route path="search" element={<SearchItem/>} />

      </Routes>

    </>

  )
}
