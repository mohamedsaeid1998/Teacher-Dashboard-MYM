import { useState } from 'react'
// @ts-ignore
import logo from '../../Assets/images/logo.svg'
import { Link, useLocation } from 'react-router-dom'
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlinePieChartOutline } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { PiStudent } from "react-icons/pi";
import { RiLogoutCircleLine } from "react-icons/ri";

const SideBar = () => {

  const [links, setLinks] = useState([
    { icon: <LuLayoutDashboard />, text: "الصفحه الرئيسيه", path: '/' },
    { icon: <HiOutlineUserGroup />, text: "المدرسين", path: '/teachers' },
    { icon: <PiStudent />, text: "الطلاب", path: '/students' },
    { icon: <MdOutlinePieChartOutline />, text: "التقرير", path: '/report' }
  ])
  const { pathname } = useLocation()
  return <>

    <nav className="bg-primaryColor text-white py-6 h-screen flex flex-col justify-between items-end fixed top-0 bottom-0 right-0  ">
      <div>
        <div className='px-16'>
          <img className='w-20 m-auto' src={logo} alt="logo" />
        </div>
        <ul className='flex flex-col gap-2 w-full justify-center mt-10 '>
          {links.map((link) => <Link key={link.text} to={link.path}>
            <li className={`flex  gap-[10px] items-center  text-[20px] leading-[16px] ${pathname === link.path ? 'bg-white text-primaryColor' : null}`}>
              {link.icon}
              <span className='h-[15px] text-xl leading-[16px]'>
                {link.text}
              </span>
            </li>
          </Link>
          )}

        </ul>
      </div>

      <div className='mx-auto h-[22px] '>
        <Link to={"/"}>
          <span className='text-[20px] leading-[16px] h-4  inline-block pl-[10px]'>خروج</span>
          <RiLogoutCircleLine className='text-[20px] inline'/>
        </Link>
      </div>
    </nav>
  </>
}

export default SideBar