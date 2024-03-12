import { data } from '../App'
import React, { useContext } from 'react'


const Reading = ({}) => {
  const {readTime} = useContext(data);
  return (
    <div className='bg-[#6047EC1A] border rounded-lg border-[#6047EC] px-10 py-6'>
      <h1 className='text-[#6047EC] font-bold text-2xl text-center'>Spent time on read : {readTime.reduce((initial, item)=> item.readTime + initial, 0)} min</h1>
    </div>
  )
}

const Bookmark = ({title}) => {
  return (
    <div className='bg-white rounded-lg p-4'>
      <h1 className='text-xl font-semibold'>{title}</h1>
    </div>
  )
}


const Bookmarked = () => {
  const {bookmarks} = useContext(data);

  return (
    <div className='lg:w-[29%] space-y-5'>
      <Reading/>
      <div className='bg-[#1111110D] rounded-lg p-5 space-y-4 lg:sticky top-4 absolute lg:overflow-y-auto'>
        <h1 className=' text-2xl font-bold'>Bookmarked blogs: {bookmarks.length}</h1>
        <div className='space-y-4'>
          {bookmarks.map((bookmark, i) => <Bookmark key={i} title = {bookmark.title}/>)}
        </div>
      </div>
    </div>
  )
}

export default Bookmarked