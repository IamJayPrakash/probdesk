import React from "react";
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="bg-primary-light dark:bg-primary-dark p-4">
      <h1 className="text-text-light dark:text-text-dark">JIRA Clone</h1>
      <ThemeToggle />
    </header>
  );
};

export default Header;