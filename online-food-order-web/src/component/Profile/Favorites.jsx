import React from 'react'
import { RestaurantCard } from '../Restaurant/RestaurantCard'
import { useSelector } from 'react-redux'

const Favorites = () => {
  const { auth } = useSelector(store => store)
  return (
    <div>
      <h1 className='py-5 text-xl font-semibold text-center'>My Favorites</h1>
      <div className='flex flex-wrap gap-1 justify-center'>
        {auth.favorites.map((item) => <RestaurantCard item={item} />)}

      </div>
      <div>
        <h1>User ID: {auth.user ? auth.user?.favorites[2]?.title : "Not Logged In"}</h1>
      </div>
    </div>
  )
}

export default Favorites