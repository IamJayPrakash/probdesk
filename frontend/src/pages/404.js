import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-4">
        <h1 className="text-4xl text-center text-text-light dark:text-text-dark">404 - Page Not Found</h1>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;