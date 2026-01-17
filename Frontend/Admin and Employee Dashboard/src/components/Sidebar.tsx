import { LayoutDashboard, Users, Activity, Laptop, FileText, LogOut } from 'lucide-react';
import { AdminPage } from './AdminDashboard';
import stLogo from 'figma:asset/8a2a604d8afe75e33045de09e7f0260bf54a57ec.png';

interface SidebarProps {
  role: 'admin';
  activePage: AdminPage;
  onPageChange: (page: AdminPage) => void;
  onLogout: () => void;
}

export function Sidebar({ activePage, onPageChange, onLogout }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard' as AdminPage, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'attendance' as AdminPage, label: 'Attendance', icon: Users },
    { id: 'device-health' as AdminPage, label: 'Device Health', icon: Activity },
    { id: 'asset-management' as AdminPage, label: 'Asset Management', icon: Laptop },
    { id: 'reports' as AdminPage, label: 'Reports', icon: FileText },
  ];

  return (
    <div className="w-60 bg-gray-900 text-white flex flex-col">
      {/* Logo/Header */}
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center gap-3 mb-2">
          <img src={stLogo} alt="ST Logo" className="h-8 w-auto" />
        </div>
        <h1 className="text-xl font-bold">ST Asset Manager</h1>
        <p className="text-xs text-gray-400 mt-1">Admin Portal</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-800">
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 transition"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}
