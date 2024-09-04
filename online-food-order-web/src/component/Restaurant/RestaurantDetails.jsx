import { Grid } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import React from 'react'

export const RestaurantDetails = () => {
    return (
        <div className='px-5 lg:px-20'>
            <section>
                <h3 className='text-gray-500 py-2 mt-10'>Home/Indian/Indian fast food</h3>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <img src="https://cdn.pixabay.com/photo/2019/09/12/15/21/resort-4471852_1280.jpg" alt="" className='w-full h-[40vh] rounded-t-md object-cover' />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img src="https://cdn.pixabay.com/photo/2022/11/14/10/37/chinese-lanterns-7591296_1280.jpg" alt="" className='w-full h-[40vh] rounded-t-md object-cover' />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img src="https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_1280.jpg" alt="" className='w-full h-[40vh] rounded-t-md object-cover' />
                        </Grid>
                    </Grid>
                </div>
                <div className='pt-3 pb-5'>
                    <h1 className='text-4xl font-semibold'>Indian fast food</h1>
                    <p className='text-gray-500 mt-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium non animi voluptas enim expedita tempore deserunt, dolorem necessitatibus ratione placeat. Sapiente veniam veritatis voluptatibus laborum illum assumenda dolor. Suscipit, expedita!</p>
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
        </div>
    )
}
