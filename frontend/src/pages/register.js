import React from 'react';
import RegisterForm from '../components/auth/RegisterForm';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const Register = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4">
        <RegisterForm />
      </main>
      <Footer />
    </div>
  );
};

export default Register;