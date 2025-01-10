import profile from '../../assets/profile.png'

export default function Header() {
  return (
    <header className='flex justify-between items-center m-2 border-b-2 p-4 max-w-[1240]'>
        <h1 className="text-3xl font-bold">Mini Blog</h1>
        <img src={profile} alt="" />
    </header>
  )
}
