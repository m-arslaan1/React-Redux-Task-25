import React, { useState } from 'react';

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="sticky top-0 z-10 shadow-md">
      <ul className="bg-blue-600 flex items-center justify-center text-white p-4 md:p-5 ">
        <li className="flex gap-10 lg:text-base md:text-xl text-sm items-center">
          <img 
            src="https://st2.depositphotos.com/3254189/5652/v/450/depositphotos_56521723-stock-illustration-illustration-with-silhouette-of-running.jpg" 
            alt="Logo" 
            className="object-contain rounded-full h-10 w-10"
          />
          <a href="/" className="hover:underline transition-all duration-300">Home</a>
          
          <div 
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <a href="#" className="hover:underline transition-all duration-300">Categories</a>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded">
                <ul className="py-2">
                  <li><a href="#" className="block px-4 py-2 hover:bg-blue-600 hover:text-white">Mens</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-blue-600 hover:text-white">Womens</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-blue-600 hover:text-white">Kids Section</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-blue-600 hover:text-white">Latest</a></li>
                </ul>
              </div>
            )}
          </div>

          <a href="#" className="hover:underline transition-all duration-300">About Us</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;