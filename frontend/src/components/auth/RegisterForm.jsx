import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useNotification } from '../../hooks/useNotifications';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useAuth();
  const { notify } = useNotification();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register({ email, password });
      notify('Registration successful');
    } catch (error) {
      notify('Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-background-light dark:bg-background-dark p-4">
      <div>
        <label className="text-text-light dark:text-text-dark">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full p-2"
        />
      </div>
      <div>
        <label className="text-text-light dark:text-text-dark">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full p-2"
        />
      </div>
      <button type="submit" className="bg-primary-light dark:bg-primary-dark p-2 mt-4">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;