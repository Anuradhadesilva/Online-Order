import { Divider, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { MenuCard } from './MenuCard';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantById, getRestaurantByUserId, getRestaurantsCategory } from '../State/Restaurant/Action';
import { Form } from 'formik';

const menu = [1, 1, 1, 1, 1, 1]
const categories = [
    "pizza",
    "biriyani",
    "fried rice",
    "cake",
    "pasta"
]

const foodTypes = [
    { label: "All", value: 'all' },
    { label: "Vegetarian", value: "vegetarian" },
    { label: "Non-Vegetarian", value: 'non_vegetarian' },
    { label: "Seasonal", value: "seasonal" }
]
export const RestaurantDetails = ({ item }) => {
    const [foodType, setFoodType] = useState("All")
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt")
    const { auth, restaurant } = useSelector(store => store)
    const { id, city } = useParams();
    const handleFilter = (e) => {
        console.log(e.target.value, e.target.name)
    }

    useEffect(() => {
        dispatch(getRestaurantByUserId(jwt))
        dispatch(getRestaurantsCategory({ jwt, restaurantId: id }))
    }, [])
    // console.log(restaurant.usersRestaurant.name)

    return (
        <div className='px-5 lg:px-20'>
            <section>
                <h3 className='text-gray-500 py-2 mt-10'>Home/Indian/Indian fast food</h3>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <img src={restaurant.usersRestaurant?.images[0]} alt="" className='w-full h-[40vh] rounded-t-md object-cover' />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img src={restaurant.usersRestaurant?.images[1]} alt="" className='w-full h-[40vh] rounded-t-md object-cover' />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img src={restaurant.usersRestaurant?.images[2]} alt="" className='w-full h-[40vh] rounded-t-md object-cover' />
                        </Grid>
                    </Grid>
                </div>
                <div className='pt-3 pb-5'>
                    <h1 className='text-4xl font-semibold'>{restaurant.usersRestaurant?.name}</h1>
                    <p className='text-gray-500 mt-1'>{restaurant.usersRestaurant?.description}</p>
                    <div className='space-y-3 mt-3'>
                        <p className='text-gray-500 flex items-center gap-3'>
                            <LocationOnIcon />
                            <span>Habadi New Delhi</span>
                        </p>
                        <p className='text-gray-500 flex items-center gap-3'>
                            <CalendarTodayIcon />
                            <span>Mon-Son: 9:00AM - 9:00PM(Today)</span>
                        </p>
                    </div>
                </div>
            </section>
            <Divider />
            <section className='pt-[2rem] lg:flex relative'>
                <div className='space-y-10 lg:w-[20%] filter'>
                    <div className='box space-y-5 lg:sticky top-28 '>
                        <div>
                            <Typography variant='h5'>
                                Food Type
                            </Typography>
                            <FormControl>
                                <RadioGroup
                                    onChange={handleFilter}
                                    value={foodType}
                                    name="food_type"
                                >
                                    {foodTypes.map((item) => <FormControlLabel key={item.value} value={item.value} control={<Radio />} label={item.label} />)}
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <Divider />
                        <div>
                            <Typography variant='h5'>
                                Food Category
                            </Typography>
                            <FormControl>
                                <RadioGroup
                                    onChange={handleFilter}
                                    value={foodType}
                                    name="food_type"
                                >
                                    {restaurant.categories?.map((item) => (<FormControlLabel key={item.id} value={item.name} control={<Radio />} label={item.name}
                                    />))}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div className='space-y-5 lg:w-[80%] lg:pl-10'>
                    {menu.map((item) => <MenuCard />)}
                </div>
            </section>

        </div>
    )
}
