
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {
  

  return (
    <div className='mx-auto'>
      <Header></Header>
      <div className='md:flex p-4 gap-8'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>
    </div>
  )
}

export default App
