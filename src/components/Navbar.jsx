import React from 'react'
import logo from "../assets/react.svg"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-green-500 p-4 flex justify-between items-center ">
      <div className="flex items-center ml-10">
        {/* Logo */}
        <img src="./image/infinitelogo.png" alt="" className='h-20 w-20 mr-2'/>

        {/* Brand Text */}
        <span className="text-white font-semibold text-lg">NVC Training Center</span>
      </div>

      <ul className="flex space-x-4 mr-10">
        <li><NavLink to ="/Home" className="text-white hover:text-green-400">หน้าหลัก</NavLink></li>
        <li><NavLink to ="/Products" className="text-white hover:text-green-400">หลักสูตรที่เปิดสอน</NavLink></li>
        <li><NavLink to ="/Contact" className="text-white hover:text-green-400">ติดต่อ</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar