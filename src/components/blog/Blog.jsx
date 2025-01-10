
export default function Blog({blog}) {
  const  {title, cover_image, author_image, author_name, reading_time, posted_date} = blog
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Title: {title}</h2>
      <img className="w-full max-h-[400px]" src={cover_image} alt="" />
      <div className="flex justify-between items-center">
        <div className="flex gap-4 mt-4 mb-4 justify-center items-center">
          <div>
            <img className="w-[40px] h-[40px] rounded-full" src={author_image} alt="" />
          </div>
          <div className="flex flex-col items-left justify-center">
            <h4 className="text-2xl font-semibold">{author_name}</h4>
            <h4>{posted_date}</h4>
          </div>
        </div>
        <div>{reading_time} min read</div>
      </div>
    </div>
  )
}
