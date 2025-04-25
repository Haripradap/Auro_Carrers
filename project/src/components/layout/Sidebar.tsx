import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Briefcase, BarChart2, GraduationCap as Graduation, Calendar, Settings, LogOut, BookOpen } from 'lucide-react';

const navItems = [
  { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/' },
  { icon: <Briefcase size={20} />, label: 'Applications', path: '/applications' },
  { icon: <BarChart2 size={20} />, label: 'Skills Gap', path: '/skills-gap' },
  { icon: <Graduation size={20} />, label: 'Learning Resources', path: '/resources' },
  { icon: <BookOpen size={20} />, label: 'Interview Prep', path: '/interviews' },
  { icon: <Calendar size={20} />, label: 'Calendar', path: '/calendar' },
];

const bottomNavItems = [
  { icon: <Settings size={20} />, label: 'Settings', path: '/settings' },
  { icon: <LogOut size={20} />, label: 'Logout', path: '/logout' },
];

const Sidebar: React.FC = () => {
  const location = useLocation();
  
  return (
    <aside className="fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200 z-30 transition-transform duration-300 ease-in-out lg:translate-x-0">
      <div className="flex flex-col h-full">
        <div className="px-6 py-6">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-600 text-white">
              <Briefcase size={20} />
            </div>
            <span className="ml-3 text-xl font-bold text-gray-900">CareerCompass</span>
          </div>
        </div>
        
        <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`
                flex items-center px-3 py-3 text-base font-medium rounded-md transition-colors duration-200
                ${location.pathname === item.path 
                  ? 'bg-primary-50 text-primary-700' 
                  : 'text-gray-700 hover:bg-gray-100'
                }
              `}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className="p-3 mt-auto border-t border-gray-200">
          {bottomNavItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center px-3 py-3 text-base font-medium text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-200"
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </div>
        
        <div className="p-4 m-3 rounded-lg bg-primary-50 text-primary-900">
          <p className="text-sm font-medium">Upgrade to Pro</p>
          <p className="text-xs mt-1">Get more features and insights!</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;