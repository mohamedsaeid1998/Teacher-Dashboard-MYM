import { Outlet } from 'react-router-dom'
import SideBar from './SideBar/SideBar'
import Header from './Header/Header'

const Layout = () => {

  return <>
    <SideBar />
    <div className='mr-[221px]'>
      <div className="container">
        <Header />
        <Outlet />
      </div>
    </div>
  </>
}

export default Layout