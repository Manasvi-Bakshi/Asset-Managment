import { useState } from 'react';
import { Sidebar } from "@/components/layout/Sidebar";
import { DashboardOverview } from '@/screens/admin/DashboardOverview';
import { AdminAttendance } from '@/screens/admin/AdminAttendance';
import { AdminDeviceHealth } from '@/screens/admin/AdminDeviceHealth';
import { AssetManagement } from '@/screens/admin/AssetManagement';
import { Reports } from '@/screens/admin/Reports';

interface AdminDashboardProps {
  userName: string;
  onLogout: () => void;
}

export type AdminPage = 'dashboard' | 'attendance' | 'device-health' | 'asset-management' | 'reports';

export function AdminDashboard({ userName, onLogout }: AdminDashboardProps) {
  const [activePage, setActivePage] = useState<AdminPage>('dashboard');

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'attendance':
        return <AdminAttendance />;
      case 'device-health':
        return <AdminDeviceHealth />;
      case 'asset-management':
        return <AssetManagement />;
      case 'reports':
        return <Reports />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        role="admin"
        activePage={activePage}
        onPageChange={setActivePage}
        onLogout={onLogout}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              {activePage === 'dashboard' && 'Dashboard Overview'}
              {activePage === 'attendance' && 'Attendance Management'}
              {activePage === 'device-health' && 'Device Health Monitor'}
              {activePage === 'asset-management' && 'Asset Management'}
              {activePage === 'reports' && 'Reports & Analytics'}
            </h2>
            <p className="text-sm text-gray-500 mt-1">Welcome back, {userName}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-sm font-medium text-gray-900">{userName}</div>
              <div className="text-xs text-gray-500">Administrator</div>
            </div>
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
              {userName.charAt(0).toUpperCase()}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
