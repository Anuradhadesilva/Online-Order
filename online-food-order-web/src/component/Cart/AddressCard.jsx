import React from 'react'
import { Button, Card } from '@mui/material'
import HomeSharpIcon from '@mui/icons-material/HomeSharp';

export const AddressCard = ({ item, showButton, handleSelectAddress }) => {

    return (
        <Card className='flex gap-5 w-64 p-5'>
            <HomeSharpIcon />
            <div className='space-y-3 text-gray-500'>
                <h1 className='font-semibold text-lg text-white'>Home</h1>
                <p>1 Galle Face Shangri-La Hotel, Colombo 00200 Sri Lanka</p>
                {showButton && (<Button variant='outlined' fullWidth onClick={() => handleSelectAddress(item)}>Select</Button>)}
            </div>
        </Card>
    )
}
