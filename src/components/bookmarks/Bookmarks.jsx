import Bookmark from "../bookmark/Bookmark";

export default function Bookmarks({bookmarks}) {
  return (
    <div className="w-1/3 text-2xl font-semibold">
       <h2>Bookmarks: {bookmarks.length}</h2>
       {
        bookmarks.map(bookmark=><Bookmark bookmark={bookmark} key={bookmark.id}></Bookmark>)
       }
    </div>
  )
}
