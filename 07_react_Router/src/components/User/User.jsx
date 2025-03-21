import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
  const { userid } = useParams()
  return (
    <div className='bg-gray-600 
    text-center text-3xl 
     text-orange-600 p-3 m-4'>
      User : {userid}
    </div>
  )
}

export default User
