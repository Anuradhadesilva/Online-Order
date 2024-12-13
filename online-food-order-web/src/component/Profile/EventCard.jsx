import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'

export const EventCard = () => {
    return (
        <div>
            <Card sx={{ width: 345 }}>
                <CardMedia sx={{ height: 345 }} image='https://cdn.pixabay.com/photo/2019/09/12/15/21/resort-4471852_1280.jpg' />
                <CardContent>
                    <Typography variant='h5'>
                        Italian Fast Food
                    </Typography>
                    <Typography variant='body2'>
                        50% off on your first order
                    </Typography>
                    <div className='py-2 space-y-2'>
                        <p>{"italy "}</p>
                        <p className='text-sm text-blue-500'>Octomber 28, 2024 12:00 AM</p>
                        <p className='text-sm text-red-500'>Octomber 28, 2024 12:00 AM</p>
                    </div>
                </CardContent>
                {false && <CardActions>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </CardActions>

                }
            </Card>
        </div>
    )
}
