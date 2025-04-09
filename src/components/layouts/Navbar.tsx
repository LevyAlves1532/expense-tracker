import { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

import SideMenu from './SideMenu';
import ChangeLanguage from '../ChangeLanguage';

const Navbar = ({ activeMenu }: { activeMenu: string }) => {
  const [ openSideMenu, setOpenSideMenu ] = useState(false);

  return (
    <div className='flex items-center gap-5 bg-white border border-b border-gray-200/50 backdrop-blur-[2px] py-4 px-7 sticky top-0 z-30'>
      <button 
        className='block lg:hidden text-black'
        onClick={() => {
          setOpenSideMenu(!openSideMenu);
        }}
      >
        {openSideMenu ? (
          <HiOutlineX className='text-2xl' />
        ) : (
          <HiOutlineMenu className='text-2xl' />
        )}
      </button>

      <h2 className='text-lg font-medium text-black flex-1'>Expense Tracker</h2>

      <div className="sm:block hidden">
        <ChangeLanguage />
      </div>

      {openSideMenu && (
        <div className="fixed top-[61px] -ml-4 bg-white">
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </div>
  );
}

export default Navbar;
