import React, { useState } from 'react';
import Link from 'next/link';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className={`bg-secondary-light dark:bg-secondary-dark p-4 ${isOpen ? 'w-64' : 'w-20'}`}>
      <button onClick={toggleSidebar} className="text-text-light dark:text-text-dark">
        {isOpen ? 'Collapse' : 'Expand'}
      </button>
      <nav className="mt-4">
        <ul>
          <li className="text-text-light dark:text-text-dark">
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li className="text-text-light dark:text-text-dark">
            <Link href="/dashboard/active-board">Active Board</Link>
          </li>
          <li className="text-text-light dark:text-text-dark">
            <Link href="/dashboard/backlog">Backlog</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;