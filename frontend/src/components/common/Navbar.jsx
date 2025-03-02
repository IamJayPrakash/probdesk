import React from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="bg-primary-light dark:bg-primary-dark p-4 flex justify-between items-center">
      <div className="text-text-light dark:text-text-dark">
        <Link href="/">JIRA Clone</Link>
      </div>
      <div className="flex space-x-4">
        <Link href="/login" className="text-text-light dark:text-text-dark">Login</Link>
        <Link href="/register" className="text-text-light dark:text-text-dark">Register</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;