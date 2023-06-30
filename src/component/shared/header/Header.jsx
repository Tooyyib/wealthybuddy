import logo from '../../img/logo.png'


const Header = () => {
  return (
    <div className="flex justify-between items-center px-[4rem] font-Montserrat w-full">
        <img className='w-[13rem]' src={logo} alt="logo" />
      <div className='flex gap-4 items-center'>
        <a className='text-[#88a915] text-decoration-line: underline' href="</Home">home</a>
        <a href="">vote</a>
        <a href=""><button className='border p-[0.2rem] rounded border-[#88a915]'>contact us</button></a>
      </div>
    </div>
  )
}

export default Header