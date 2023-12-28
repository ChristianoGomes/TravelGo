import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Popup from '../components/Popup'


const Layout = () => {
  const [orderPopup, setOrderPopup] = React.useState(false)

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  
  return (
    <div>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Outlet />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  )
}

export default Layout
