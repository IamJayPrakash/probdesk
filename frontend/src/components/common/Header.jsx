import React from 'react';
import ThemeToggle from './ThemeToggle';
import useAuth from '../../hooks/useAuth'; // ✅ Fix import

const Header = () => {
  const { user, logout } = useAuth(); // ✅ Now correctly using useAuth.js

  return (
    <header className="bg-primary-light dark:bg-primary-dark p-4 flex justify-between items-center">
      <h1 className="text-text-light dark:text-text-dark">JIRA Clone</h1>
      <div>
        {user ? (
          <>
            <button onClick={logout} className="p-2">Logout</button>
          </>
        ) : (
          <>
            <a href="/login" className="p-2">Login</a>
            <a href="/register" className="p-2">Register</a>
          </>
        )}
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
