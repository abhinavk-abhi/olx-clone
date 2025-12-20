import React from 'react'
import './Navbar.css'
import logo from '../../assets/symbol.png'
import search from '../../assets/search1.svg'
import arrow from '../../assets/arrow-down.svg'
import searchwt from '../../assets/search.svg'

const Navbar = (props) => {
  const {toggleModal} = props
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

    <p
      onClick={toggleModal}
      className="font-bold cursor-pointer hover:text-teal-600"
    >
      Login
    </p>

    <p className="font-bold cursor-pointer border-2 border-black rounded-full px-4 py-1">
      Sell
    </p>

  </div>
</nav>

    </div>
  )
}

export default Navbar
