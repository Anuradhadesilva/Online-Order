import { Card, Chip, IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React from 'react'

export const RestaurantCard = () => {
    return (
        <Card className='m-5 w-[18rem]'>
            <div className={`${true ? 'cursor-pointer' : 'cursor-not-allowed'} relative`}>
                <img className='w-full h-[10rem] rounded-t-md object-cover' src="https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_1280.jpg" alt="" />
                <Chip
                    size='small'
                    className='absolute top-2 left-2'
                    color={true ? 'success' : 'error'}
                    label={true ? 'open' : 'closed'}
                />
            </div>
            <div className='p-2 textPart lg:flex w-full justify-between'>
                <div className='space-y-2'>
                    <p className='font-semibold text-lg'>Indian fast food</p>
                    <p className='text-gray-500 text-sm'>Indulge in life's greatest pleasure: food.</p>
                </div>
                <div className='pt- -5'>
                    <IconButton>
                        {true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>
                </div>
            </div>

        </Card>
    )
}
