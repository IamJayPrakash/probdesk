import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useNotification } from '../../hooks/useNotifications';
import { useRouter } from 'next/router';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const { notify } = useNotification();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password });
      notify('Login successful');
      router.push('/dashboard');
    } catch (error) {
      notify('Login failed');
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
        Login
      </button>
    </form>
  );
};

export default LoginForm;