import { data } from '../App'
import React, { useContext } from 'react'
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";


function Blog({cover, pp, author, date, title, tags, read, id}) {
  const { bookmarks, setBookmarks, readTime ,setReadTime } = useContext(data);
  console.log('readTime = ',readTime);
  return ( 
    <div className=' space-y-5'>
      <div className='w-full rounded-lg'><img src={cover} alt="" className='w-full rounded'/></div>
      <div className=' flex w-full gap-4'>
        <div className='rounded-full'>
          <img src={pp} alt="" className=' size-12'/>
        </div>
        <div className='w-full flex justify-between'>
          <div>
            <h2 className='text-2xl font-bold'>{author}</h2>
            <h4 className='text-[#11111199] text-base font-semibold'>{date}</h4>
          </div>
          
          <div className='flex items-center gap-4'>
            <h4 className='text-lg font-medium text-[#11111199]'>{read} minutes read</h4>
            {bookmarks.includes(bookmarks.filter(bookmark => id === bookmark.id)[0]) ?
            <FaBookmark className='size-6 cursor-pointer' onClick={()=> {
              if(bookmarks.includes(bookmarks.filter(bookmark => id === bookmark.id)[0])) {
                setBookmarks(bookmarks.filter(bookmark => id !== bookmark.id));
              } else {
                setBookmarks([...bookmarks, {id: id, title: title}]);
              }
            }}/>:
            <FaRegBookmark className='size-6 cursor-pointer' onClick={()=> {
              if(bookmarks.includes(bookmarks.filter(bookmark => id === bookmark.id)[0])) {
                setBookmarks(bookmarks.filter(bookmark => id !== bookmark.id));
              } else {
                setBookmarks([...bookmarks, {id: id, title: title}]);
              }
            }}/>}
            
          </div>
        </div>
      </div>
      <h1 className='font-bold text-4xl'>{title}</h1>
      <div className=' space-x-3 font-medium text-lg text-[#11111199]'>
        {tags.map((tag, i) => <span key={i}>#{tag}</span>)}
      </div>
      <button onClick={() => {
        console.log('checking include: ', readTime.includes({id: id, readTime: read}))
        if(readTime.includes(readTime.filter(item => id === item.id)[0])) {
          setReadTime(readTime.filter(item => id !== item.id))
        } else {
          setReadTime([...readTime, { id: id, readTime: read }])
        }
      }} className={readTime.includes(readTime.filter(item => id === item.id)[0]) ? 'bg-red-400 text-white font-semibold p-3 flex rounded-lg' : ' bg-green-400 text-white font-semibold p-3 flex rounded-lg'}>mark as {readTime.includes(readTime.filter(item => id === item.id)[0]) ? 'unread' : 'read'}</button>
    </div>
  )
}

const Blogs = () => {
  const {blogs, bookmarks} = useContext(data);
  console.log(blogs);
  console.log(bookmarks);
  return (
    <div className='lg:w-[70%] space-y-4 bg-white rounded-lg p-5'>
      {blogs.map(blog => {
        return <Blog key={blog.id} cover={blog.cover_image} pp = {blog.author_profile_picture} author={blog.author} date = {blog.post_date} title = {blog.post_title} tags = {blog.tags} read = {blog.time_to_read_minutes} id= {blog.id}/>
      })}
    </div>
  )
}

export default Blogs