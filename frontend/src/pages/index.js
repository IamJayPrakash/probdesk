import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-4">
        <h1 className="text-4xl font-bold text-center">Welcome to JIRA Clone</h1>
        <p className="text-center mt-4">A professional project management tool</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;