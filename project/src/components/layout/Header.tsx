import React, { useState } from 'react';
import { Search, Bell, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  
  return (
    <header className="sticky top-0 z-20 bg-white border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              type="button"
              className="text-gray-500 lg:hidden"
              onClick={toggleSidebar}
            >
              <Menu size={24} />
            </button>
            
            <div className="hidden lg:flex items-center ml-4">
              <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="max-w-lg w-full lg:max-w-xs">
              <label htmlFor="search" className="sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                  placeholder="Search applications..."
                  type="search"
                />
              </div>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="relative">
              <button
                type="button"
                className="p-1 text-gray-500 hover:text-gray-700 relative"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <Bell size={20} />
                <span className="absolute top-0 right-0 w-2 h-2 bg-primary-600 rounded-full" />
              </button>
              
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-50 animate-fade-in">
                  <div className="p-3 border-b border-gray-200 flex justify-between items-center">
                    <h3 className="text-sm font-semibold">Notifications</h3>
                    <button
                      type="button"
                      className="text-gray-400 hover:text-gray-500"
                      onClick={() => setShowNotifications(false)}
                    >
                      <X size={16} />
                    </button>
                  </div>
                  <div className="max-h-96 overflow-y-auto p-2">
                    <div className="p-3 hover:bg-gray-50 rounded-md">
                      <p className="text-sm font-medium">Interview reminder</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Your interview with Tech Innovations Inc. is tomorrow at 10:00 AM
                      </p>
                      <p className="text-xs text-gray-400 mt-2">1 hour ago</p>
                    </div>
                    <div className="p-3 hover:bg-gray-50 rounded-md">
                      <p className="text-sm font-medium">Application deadline</p>
                      <p className="text-xs text-gray-500 mt-1">
                        The application for Data Systems LLC closes in 2 days
                      </p>
                      <p className="text-xs text-gray-400 mt-2">5 hours ago</p>
                    </div>
                    <div className="p-3 hover:bg-gray-50 rounded-md">
                      <p className="text-sm font-medium">Skill suggestion</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Based on your applications, learning Docker could improve your chances
                      </p>
                      <p className="text-xs text-gray-400 mt-2">Yesterday</p>
                    </div>
                  </div>
                  <div className="p-2 border-t border-gray-200">
                    <Link 
                      to="/notifications"
                      className="block text-center text-xs text-primary-600 hover:text-primary-700 font-medium"
                    >
                      View all notifications
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <div className="ml-4 relative flex-shrink-0">
              <Button
                variant="primary"
                size="sm"
                onClick={() => {}}
              >
                + New Application
              </Button>
            </div>
            
            <div className="ml-3 relative">
              <div>
                <button
                  type="button"
                  className="flex rounded-full bg-gray-200 text-sm focus:outline-none"
                  id="user-menu"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="User profile"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;