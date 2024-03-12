import React from 'react'
import profile from'../assets/images/profile.png' 

const Header = () => {
  return (
    <div className='flex justify-between p-10'>
      <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
      <div className=' rounded-full'>
        <img src={profile} alt="profile" />
      </div>
    </div>
  )
}

export default Header