import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';
import { useDarkMode } from '../context/useDarkMode'
import styled from 'styled-components'; 
import Search from './Search';
import { RxHamburgerMenu } from 'react-icons/rx'

const ToggleButton = styled.button`
  font-size: 2rem;
  cursor: pointer;
  background-color: transparent;
  transition: all 150ms ease-out;

  &:hover {
    transform: scale(1.1);
    color: #149eca;
  }
`;

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className='fixed z-10 w-full navbar shadow-lg bg-white dark:bg-neutral text-neutral-content'>
      <div className='flex justify-between w-full xl:container xl:m-auto'>
      <label htmlFor='side-menu' className='flex-none lg:hidden btn btn-square btn-ghost w-10 sm:w-auto'>
        <RxHamburgerMenu  size="24" /></label>
        <Link to='/' className='flex items-center text-2xl font-medium gap-5'>
          <h1 className='text-2xl font-semibold'>React Shop</h1>
          <div className='flex-none hidden md:flex md:flex-1 ml-2 gap-5'>
            <Link to='/fashion'>Fashion</Link>
            <Link to='/Accessory'>Accessory</Link>
            <Link to='/Digital'>Digital</Link>
          </div>
        </Link>
        <nav className='flex items-center gap-4 font-semibold'>
          <ToggleButton onClick={toggleDarkMode}>
            {!darkMode ? <HiOutlineMoon /> : <HiOutlineSun />}
          </ToggleButton>
          <Search />
          <Link to='/Cart' className='text-2xl'>
            <FiShoppingCart />
          </Link>
        </nav>
      </div>
    </header>
    
  );
}
