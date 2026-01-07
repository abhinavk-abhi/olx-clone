import React from 'react'
import './Navbar.css'
import logo from '../../assets/symbol.png'
import search from '../../assets/search1.svg'
import arrow from '../../assets/arrow-down.svg'
import searchwt from '../../assets/search.svg'
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth, logout } from '../../config/firebase.config'
import addBtn from '../../assets/addButton.png'


const Navbar = (props) => {

  const [user] = useAuthState(auth)

  const {toggleModal,toggleModalSell} = props
  return (
    <div>
    <nav className="fixed z-50 w-full p-2 px-3 shadow-md bg-slate-100 border-b-4 border-b-white flex items-center gap-3">

  {/* Logo */}
  <img src={logo} alt="Logo" className="w-12 shrink-0" />

  {/* Location Search */}
  <div className="relative ml-3 shrink-0">
    <img src={search} alt="" className="absolute top-4 left-2 w-5" />
    <input
      type="text"
      placeholder="Search city, area or locality..."
      className="w-30 sm:w-45 md:w-60 p-3 pl-8 pr-8 border-2 border-black rounded-md focus:outline-none focus:border-teal-300"
    />
    <img src={arrow} alt="" className="absolute top-4 right-3 w-5 cursor-pointer" />
  </div>

  {/* Main Search (flex-grow) */}
  <div className="relative grow mx-2">
    <input
      placeholder="Find Cars, Mobile Phones, and More..."
      className="w-full p-3 border-2 border-black rounded-md focus:outline-none focus:border-teal-300"
      type="text"
    />
    <div
      style={{ backgroundColor: '#002f34' }}
      className="flex justify-center items-center absolute top-0 right-0 h-full w-12 rounded-e-md"
    >
      <img className="w-5 filter invert" src={searchwt} alt="Search" />
    </div>
  </div>

  {/* Right Section */}
  <div className="flex items-center gap-5 shrink-0">

    <div className="flex items-center gap-1 cursor-pointer">
      <p className="font-bold">English</p>
      <img src={arrow} alt="" className="w-5" />
    </div>

    <div className='profile'>
    {!user ? (
      <p onClick={toggleModal} className='font-bold underline ml-5 cursor-pointer' style={{color : "#002f34"}}  >Login</p>
    ):(
      <div className='relative username' >
        <p style={{color : "#002f34"}} className='font-bold ml-5 cursor-pointer'>{user.displayName?.split(' ')[0]}</p>
        <div className="dropdown">
          <p onClick={()=> {logout()}}>Sign Out</p>
        </div>
      </div>
    )}
    </div>
   
    <img src={addBtn} 
    onClick={user ? toggleModalSell : toggleModal}
    className='w-24 mx-1 sm:ml-5 sm:mr-5 shadow-xl rounded-full cursor-pointer'
    alt="" />

  </div>
</nav>

    <div className='w-full relative z-0 flex shadow-md p-2 pt-20 pl-10 pr-10 sm:pl-44 md:pr-44 sub-lists'>
        <ul className='list-none flex items-center justify-between w-full'>
            <div className='flex shrink-0'>
                <p className='font-semibold uppercase all-cats'>
                  All categories
                </p>
                <img className='w-4 ml-2' src={arrow} alt="" />
            </div>

            <li>Cars</li>
            <li>Motorcycles</li>
            <li>Mobile Phones</li>
            <li>For sale : House & Apartments </li>
            <li>Scooter</li>
            <li>Commercial & Other Vehicles</li>
            <li>For rent : Houses & Apartments</li>
        </ul>
    </div>

    </div>
  )
}

export default Navbar
