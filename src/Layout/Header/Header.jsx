// @ts-nocheck
import './Header.module.scss'
import proImage from '../../Assets/images/ellipse-2.svg'
const Header = () => {

  return <>
    <header className='p-8'>
      <div className=" flex gap-8 items-center">

        <div className='profile flex justify-start gap-4'>
          <img className='w-12 ' src={proImage} alt="profile Image" />

          <p className='flex flex-col gap-3'>
            <h1 className='text-[16px] font-semibold h-[10px]' >اهلا أدمن</h1>
            <span className='text-[13px] h-[8px] text-[#48464C]'>8:34 صباحا-12 سبتمبر 2023</span>
          </p>
        </div>


        <div className='flex flex-1 relative '>
          <input className='rounded-[10px] bg-white w-full p-2 pr-10 ' type="search" placeholder='بحث' />
          <i className="fa-solid fa-magnifying-glass absolute cursor-pointer  top-[35%] pr-1 translate-x-[-50%]"></i>

        </div>

        <div className='notification w-10 h-10 bg-white flex justify-center items-center'>
          <div className='relative'>
            <i className="fa-solid fa-bell text-[25px]"></i>
            <span className="w-2 h-2 bg-blue-500 rounded-full absolute right-0" />
          </div>
        </div>
      </div>
    </header>
  </>
}

export default Header