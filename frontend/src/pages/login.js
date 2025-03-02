import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4">
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
};

export default Login;