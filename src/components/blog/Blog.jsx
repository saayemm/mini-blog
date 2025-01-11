import { FaRegBookmark } from "react-icons/fa6";

export default function Blog({blog, hundleBookmark}) {
  const  {title, cover_image, author_image, author_name, reading_time, posted_date, hashtags} = blog
  return (
    <div className="mt-8">
      
      <img className="w-full max-h-[400px]" src={cover_image} alt="" />
      <div className="flex justify-between items-center">
        <div className="flex gap-4 mt-4 mb-4 justify-center items-center">
          <div>
            <img className="w-[60px] h-[60px] rounded-full" src={author_image} alt="" />
          </div>
          <div className="flex flex-col items-left justify-center">
            <h4 className="text-2xl font-semibold">{author_name}</h4>
            <h4>{posted_date}</h4>
          </div>
        </div>
        <div className="flex gap-2">
          <div>{reading_time} min read</div>
          <button onClick={hundleBookmark} className="text-green-500"><FaRegBookmark /></button>
        </div>
      </div>
      <h2 className="text-2xl font-bold">Title: {title}</h2>
      {
        hashtags.map((hastag, index)=> <span key={index} className="ml-2 text-red-500"><a href="">{hastag}</a></span>)
      }
    </div>
  )
}
