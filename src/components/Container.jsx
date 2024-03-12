import React from 'react'
import Blogs from './Blogs'
import Bookmarked from './Bookmarked'

const Container = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between'>
      <Blogs/>
      <Bookmarked/>
    </div>
  )
}

export default Container