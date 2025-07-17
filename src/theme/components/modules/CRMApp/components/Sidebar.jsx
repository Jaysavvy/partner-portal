import { NavLink } from 'react-router-dom';
import { Users, Building2, DollarSign, Home } from 'lucide-react';

export default function Sidebar() {
  const navItems = [
    { to: '/', icon: Home, label: 'Dashboard' },
    { to: '/contacts', icon: Users, label: 'Contacts' },
    { to: '/companies', icon: Building2, label: 'Companies' },
    { to: '/deals', icon: DollarSign, label: 'Deals' },
  ];

  return (
    <nav className="w-64 bg-white shadow-lg">
      {/* Logo/Brand */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800">CRM App</h1>
        <p className="text-sm text-gray-500 mt-1">HubSpot Integration</p>
      </div>
      
      {/* Navigation Links */}
      <ul className="p-4 space-y-2">
        {navItems.map(({ to, icon: Icon, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-50 text-blue-600 font-medium'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`
              }
            >
              <Icon size={20} />
              <span>{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}