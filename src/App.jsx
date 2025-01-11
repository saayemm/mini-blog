
import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const hundleBookmark = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  const hundleMarkAsRead = time => {
    const newTime = readingTime + time;
    setReadingTime(newTime)
    
  }

  return (
    <div className='mx-auto'>
      <Header></Header>
      <div className='md:flex p-4 gap-8'>
      <Blogs hundleMarkAsRead={hundleMarkAsRead} hundleBookmark={hundleBookmark}></Blogs>
      <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </div>
  )
}

export default App
