
import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])

  const hundleBookmark = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  return (
    <div className='mx-auto'>
      <Header></Header>
      <div className='md:flex p-4 gap-8'>
      <Blogs hundleBookmark={hundleBookmark}></Blogs>
      <Bookmarks></Bookmarks>
      </div>
    </div>
  )
}

export default App
