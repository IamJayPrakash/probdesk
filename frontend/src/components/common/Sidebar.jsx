import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-secondary-light dark:bg-secondary-dark p-4 w-64">
      <nav>
        <ul>
          <li className="text-text-light dark:text-text-dark"><a href="/dashboard">Dashboard</a></li>
          <li className="text-text-light dark:text-text-dark"><a href="/tickets/board">Active Board</a></li>
          <li className="text-text-light dark:text-text-dark"><a href="/tickets/backlog">Backlog</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;