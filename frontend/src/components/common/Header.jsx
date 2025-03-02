'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import useAuth from '../../hooks/useAuth';
import menuData from './menuData';

const Header = () => {
  // Mobile Navbar Toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar);
    return () => window.removeEventListener('scroll', handleStickyNavbar);
  }, []);

  // Submenu Handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const currentPath = usePathname();
  const { user, logout } = useAuth();

  return (
    <header
      className={`header left-0 top-0 z-40 flex w-full items-center ${
        sticky
          ? 'fixed z-[9999] bg-white bg-opacity-80 shadow-sticky backdrop-blur-sm transition dark:bg-gray-dark dark:shadow-sticky-dark'
          : 'absolute bg-transparent'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between px-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className={`header-logo flex items-center ${
                sticky ? 'py-5 lg:py-2' : 'py-8'
              }`}
            >
              <Image
                src="/images/logo/logo.png"
                alt="logo"
                width={100}
                height={50}
                className="h-10 w-10 dark:block sm:h-8 sm:w-8 lg:h-12 lg:w-12"
              />
              <span className="ml-2 whitespace-nowrap text-lg font-bold sm:text-sm lg:text-lg">
                Prob Desk
              </span>
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={navbarToggleHandler}
            id="navbarToggler"
            aria-label="Mobile Menu"
            className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-1 ring-primary focus:ring-2 lg:hidden"
          >
            <span
              className={`block h-0.5 w-7 bg-black transition-all duration-300 dark:bg-white ${
                navbarOpen ? 'rotate-45 translate-y-1.5' : 'mb-1'
              }`}
            />
            <span
              className={`block h-0.5 w-7 bg-black transition-all duration-300 dark:bg-white ${
                navbarOpen ? 'opacity-0' : 'mb-1'
              }`}
            />
            <span
              className={`block h-0.5 w-7 bg-black transition-all duration-300 dark:bg-white ${
                navbarOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </button>
          {/* Navbar */}
          <nav
            id="navbarCollapse"
            className={`absolute right-0 z-30 w-64 rounded border bg-white px-6 py-4 duration-300 dark:border-gray-700 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 ${
              navbarOpen
                ? 'visible top-full opacity-100'
                : 'invisible top-[120%] opacity-0'
            }`}
          >
            <ul className="flex flex-col space-y-4 lg:flex-row lg:space-x-12 lg:space-y-0">
              {menuData.map((menuItem, index) => (
                <li key={index} className="relative group">
                  {menuItem.path ? (
                    <Link
                      href={menuItem.path}
                      className={`py-2 text-base lg:inline-flex lg:px-0 lg:py-6 ${
                        currentPath === menuItem.path
                          ? 'text-primary dark:text-white'
                          : 'text-dark hover:text-primary dark:text-white/70 dark:hover:text-white'
                      }`}
                    >
                      {menuItem.title}
                    </Link>
                  ) : (
                    <>
                      <p
                        onClick={() => handleSubmenu(index)}
                        className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:inline-flex lg:px-0 lg:py-6"
                      >
                        {menuItem.title}
                        <span className="pl-3">
                          <svg width="25" height="24" viewBox="0 0 25 24">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </p>
                      <div
                        className={`absolute left-0 top-full rounded-sm bg-white p-4 shadow-lg transition-all duration-300 lg:invisible lg:group-hover:visible lg:group-hover:top-full ${
                          openIndex === index ? 'block' : 'hidden'
                        }`}
                      >
                        {menuItem?.submenu?.map((submenuItem, subIndex) => (
                          <Link
                            href={submenuItem.path || '#'}
                            key={subIndex}
                            className="block py-2 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
                          >
                            {submenuItem.title}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          {/* Theme Toggle & Auth */}
          <div className="flex items-center space-x-4 pr-4 lg:pr-0">
            {user ? (
              <button onClick={logout} className="px-3 py-2 text-base">
                Logout
              </button>
            ) : (
              <>
                <Link href="/login" className="px-3 py-2 text-base">
                  Login
                </Link>
                <Link href="/register" className="px-3 py-2 text-base">
                  Register
                </Link>
              </>
            )}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
