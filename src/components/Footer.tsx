import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">VeloxPrompt 🚀</span>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Elevate your AI interactions with our advanced prompt generation tool.
            </p>
          </div>
          <div className="w-full lg:w-2/3 flex flex-wrap">
            <div className="w-1/2 md:w-1/3 mb-8 lg:mb-0">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Product</h3>
              <ul className="mt-4 space-y-4">
                <li><Link to="/" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Home</Link></li>
                <li><Link to="/pricing" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Pricing</Link></li>
              </ul>
            </div>
            <div className="w-1/2 md:w-1/3 mb-8 lg:mb-0">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                <li><Link to="/about" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">About</Link></li>
              </ul>
            </div>
            <div className="w-1/2 md:w-1/3">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {/* Add social media icons here */}
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; 2024 VeloxPrompt. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;