import Bookmark from "../bookmark/Bookmark";

export default function Bookmarks({bookmarks, readingTime}) {
  return (
    <div className="w-1/3 text-2xl font-semibold">
      <div>
        <h3 className="text-2xl">Reading time: {readingTime}</h3>
      </div>
       <h2>Bookmarks: {bookmarks.length}</h2>
       {
        bookmarks.map(bookmark=><Bookmark bookmark={bookmark} key={bookmark.id}></Bookmark>)
       }
    </div>
  )
}
