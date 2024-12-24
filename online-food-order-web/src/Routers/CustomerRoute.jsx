import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { RestaurantDetails } from '../component/Restaurant/RestaurantDetails'
import { Cart } from '../component/Cart/Cart'
import { Navbar } from '../component/Navbar/Navbar'
import Profile from '../component/Profile/Profile'
import { Home } from '../component/Home/Home'
import { Auth } from '../component/Auth/Auth'

const CustomerRoute = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/account/:register' element={<Home />} />
                <Route path='/restaurant/:city/:title/:id' element={<RestaurantDetails />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/my-profile/*' element={<Profile />} />
            </Routes>
            <Auth />
        </div>
    )
}

export default CustomerRoute