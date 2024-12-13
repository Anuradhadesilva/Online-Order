import React from 'react'
import { EventCard } from './EventCard'

const Address = () => {
  return (
    <div className='flex flex-wrap'>
      {[1, 1, 1].map((item) => <EventCard />)}
    </div>
  )
}

export default Address