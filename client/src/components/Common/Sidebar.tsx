import { Button } from '@/shad/button';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ConnectKitButton } from 'connectkit';

const handleLogout = () => {
  // Handle logout logic here
};

const Sidebar: React.FC = () => {

  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
  }, []);

  {/* <div  className={`${isSticky ? 'sticky top-0' : ''}`}> */}

  
  return (
    <div  className='sticky top-0'>

      <div className="w-64 h-screen bg-gray-900 text-white flex flex-col justify-between ">
        <div>
          <div className="py-4 px-6">
            <h1 className="text-2xl font-bold">Drug Ensure</h1>
          </div>
          <nav className="mt-6">
            <ul className="flex flex-col space-y-4">
              <li className="w-full">
                <Button asChild variant="default" size="default" className="w-full bg-cyan-450">
                  <NavLink to="/marketplace" className="flex items-center py-3 px-6 justify-center w-full hover:bg-gray-500 transition-colors">
                    Market Place
                  </NavLink>
                </Button>
              </li>
              <li className="w-full">
                <Button asChild variant="default" size="default" className="w-full bg-cyan-450">
                  <NavLink to="/inventory" className="flex items-center py-3 px-6 justify-center w-full hover:bg-gray-500 transition-colors">
                    Inventory
                  </NavLink>
                </Button>
              </li>
              <li className="w-full">
                <Button asChild variant="default" size="default" className="w-full bg-cyan-450">
                  <NavLink to="/sold" className="flex items-center py-3 px-6 justify-center w-full hover:bg-gray-500 transition-colors">
                    Sold
                  </NavLink>
                </Button>
              </li>
              <li className="w-full">
                <Button asChild variant="default" size="default" className="w-full bg-cyan-450">
                  <NavLink to="/add-products" className="flex items-center py-3 px-6 justify-center w-full hover:bg-gray-500 transition-colors">
                    Add Products
                  </NavLink>
                </Button>
              </li>
              <li className="w-full">
                <Button asChild variant="default" size="default" className="w-full bg-cyan-450">
                  <NavLink to="/transactions" className="flex items-center py-3 px-6 justify-center w-full hover:bg-gray-500 transition-colors">
                    Transactions
                  </NavLink>
                </Button>
              </li>
              <li className="w-full">
                <Button asChild variant="default" size="default" className="w-full bg-cyan-450">
                  <NavLink to="/verify" className="flex items-center py-3 px-6 justify-center w-full hover:bg-gray-500 transition-colors">
                    Verify
                  </NavLink>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex  justify-center py-6">
          <ConnectKitButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
