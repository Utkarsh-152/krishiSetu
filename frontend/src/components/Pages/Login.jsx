import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { IconBrandGoogleFilled, IconHome } from '@tabler/icons-react';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault(); 

    const { email, password } = formData;

    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Login error:', error.message);
      alert(error.message);
    } else {
      console.log('Login success:', data);
      alert('Logged in!');
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen rounded-l-full flex items-center justify-center bg-gradient-to-br from-[#80CA6C] to-[#3A632F] py-4 px-2">
      <img src="wheat.png" alt="Wheat" className="z-10 hidden md:block absolute right-0 top-0 h-full w-auto pointer-events-none select-none" />
      {/* Home Button */}
      <Link to="/" className="fixed top-6 right-6 z-20">
        <button className="bg-white shadow-lg rounded-full p-3 hover:bg-green-100 transition flex items-center justify-center">
          <IconHome className="h-6 w-6 text-green-700" />
        </button>
      </Link>
      <div className="relative bg-white rounded-[2rem] shadow-2xl flex flex-col items-center px-8 pt-4 pb-4 w-full max-w-md mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Login to your account</h1>
        <p className="mb-6 text-sm text-gray-600 text-center">
          Enter your email below to login to your account
        </p>
        <form onSubmit={handleLogin} className="space-y-6 w-full">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-sm"
              placeholder="m@example.com"
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-medium text-green-600 hover:text-green-500">
                  Forgot your password?
                </a>
              </div>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
          >
            Login
          </button>
        </form>

        <div className="w-full mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="mt-6">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
            >
              <IconBrandGoogleFilled className="h-5 w-5" />
              Login with Google
            </button>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="font-medium text-green-600 hover:text-green-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
