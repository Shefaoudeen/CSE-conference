import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, LogIn } from 'lucide-react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState('');
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    setAuthError('');
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      alert('Login Successful ✅');
      navigate('/WorkShop');
    } catch (error) {
      console.error('Firebase Login Error:', error);
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        setAuthError('Invalid email or password');
      } else if (error.code === 'auth/too-many-requests') {
        setAuthError('Too many failed login attempts. Please try again later.');
      } else {
        setAuthError('An error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto mt-40 p-6 bg-white rounded-xl shadow-lg"
    >
      <h2 className="text-xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
        <LogIn size={20} /> Login
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="flex items-center gap-2 border rounded px-3 py-2">
            <Mail size={18} className="text-gray-500" />
            <input
              type="email"
              placeholder="Email"
              className="flex-1 outline-none"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
            />
          </label>
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div>
          <label className="flex items-center gap-2 border rounded px-3 py-2">
            <Lock size={18} className="text-gray-500" />
            <input
              type="password"
              placeholder="Password"
              className="flex-1 outline-none"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters'
                }
              })}
            />
          </label>
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        {authError && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm"
          >
            {authError}
          </motion.div>
        )}

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2 h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500" />
            Remember me
          </label>
          <a href="#" className="text-blue-600 hover:text-blue-500 font-medium">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {isLoading ? 'Signing in...' : (
            <span className="flex items-center justify-center gap-2">
              <LogIn size={18} /> Sign In
            </span>
          )}
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          Don't have an account?{' '}
          <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
            Sign up
          </a>
        </p>
      </form>
    </motion.div>
  );
};

export default Login;
