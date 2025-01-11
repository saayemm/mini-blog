import { useEffect } from "react"
import { useState } from "react"
import Blog from "../blog/Blog"

export default function Blogs({hundleBookmark}) {
    const [blogs, setBlogs] = useState([])

    useEffect(()=> {
        fetch("blogs.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    }, [])
  return (
    <div className="w-2/3">
        <h1 className="text-2xl font-semibold">Blogs</h1>
        {
          blogs.map(blog=><Blog 
              key={blog.id} 
              blog={blog}
              hundleBookmark={hundleBookmark}></Blog>)
        }
    </div>
  )
}
