import React from 'react'
import { Link } from 'react-router-dom'
import cartIcon from '../assets/images/cart.png'

function  Header() {
  return (
    <header className='flex justify-between items-center'>
      <Link to='/' className='text-xl font-semibold'>Home</Link>
      <div className='w-10 h-10 bg-gray-400 rounded-full flex justify-center items-center relative'>
        <img src={cartIcon} className='w-6' alt="" />
        <span className='absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center'>0</span>
      </div>
    </header>
  )
}

export default Header
