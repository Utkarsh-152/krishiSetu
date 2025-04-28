import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconBrandGoogleFilled, IconHome } from '@tabler/icons-react';
import { supabase } from '../lib/supabaseClient.js'; // adjust the path if needed

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          full_name: formData.name, // optional: custom user metadata
        }
      }
    });
  
    if (error) {
      console.error("Signup error:", error.message);
      alert(error.message);
    } else {
      console.log("Signup success:", data);
      alert("Check your inbox to confirm your email (if email confirmation is enabled).");
    }
  }
  return (
    <div className=" min-h-screen rounded-l-full flex items-center justify-center bg-gradient-to-br from-[#80CA6C] to-[#3A632F] py-4 px-2">
      <img src="wheat.png" alt="Wheat" className="hidden md:block absolute right-0 top-0 h-full w-auto z-10 pointer-events-none select-none" />

      {/* Home Button */}
      <Link to="/" className="fixed top-6 right-6 z-20">
        <button className="bg-white shadow-lg rounded-full p-3 hover:bg-green-100 transition flex items-center justify-center">
          <IconHome className="h-6 w-6 text-green-700" />
        </button>
      </Link>
      <div className="relative bg-white rounded-[2rem] shadow-2xl flex flex-col items-center px-8 pt-4 pb-4 w-full max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mt-2 mb-2">Create your account</h1>
        <p className="mb-6 text-gray-600 text-center text-sm">Fill in your details to create your account</p>
        <form onSubmit={handleSubmit} className="space-y-5 w-full">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-sm"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
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
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-sm"
              placeholder="Create a strong password"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-sm"
              placeholder="Confirm your password"
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
          >
            Create Account
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
              Sign up with Google
            </button>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-green-600 hover:text-green-500">
            Sign in
          </Link>
        </p>
        <p className="mt-4 text-center text-xs text-gray-500">
          By signing up, you agree to our{' '}
          <a href="#" className="text-green-600 hover:text-green-500">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="text-green-600 hover:text-green-500">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register; 