import { Avatar, Badge, IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { blue } from '@mui/material/colors';
import "./Navbar.css"

export const Navbar = () => {
  return (
    <div className='px-5 z-50 py-[.8rem] bg-[#1e98e9] lg:px-20 flex justify-between'>

      <div className='flex items-center space-x-4'>

        <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>

          <li className='logo font-semibold ttext-gray-300 text-2xl'>
            GoFood
          </li>

        </div>

      </div>
      <div className='flex items-center space-x-2 lg:space-x-10'>
        <div className=''>
          <IconButton>
            <SearchIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        </div>
        <div className=''>
          <Avatar sx={{ bgcolor: 'white', color: blue[500] }}>C</Avatar>
        </div>
        <div className=''>
          <IconButton>
            <Badge color='primary' badgeContent={3}>
              <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
            </Badge>
          </IconButton>
        </div>
      </div>

    </div>
  )
}
