


const Bookmark = ({bookmark}) => {
    const {title} = bookmark
  return (
    <div className="bg-slate-200 p-4 mt-4">
        <h2 className="text-xl font-semibold">{title}</h2>
    </div>
  )
}

export default Bookmark