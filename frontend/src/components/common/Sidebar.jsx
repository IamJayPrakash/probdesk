import React from "react";

const Sidebar = () => {
  return (
    <aside className="bg-secondary-light dark:bg-secondary-dark p-4">
      <nav>
        <ul>
          <li className="text-text-light dark:text-text-dark">Dashboard</li>
          <li className="text-text-light dark:text-text-dark">Projects</li>
          <li className="text-text-light dark:text-text-dark">Issues</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;