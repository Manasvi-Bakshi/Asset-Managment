import { useState } from 'react';
import { EmployeeAttendance } from './EmployeeAttendance';
import { EmployeeDeviceHealth } from './EmployeeDeviceHealth';
import { AssignedLaptop } from './AssignedLaptop';
import { LogOut, Clock, Laptop, Activity } from 'lucide-react';
import stLogo from 'figma:asset/8a2a604d8afe75e33045de09e7f0260bf54a57ec.png';

interface EmployeeDashboardProps {
  userName: string;
  onLogout: () => void;
}

export type EmployeePage = 'attendance' | 'device-health' | 'laptop';

export function EmployeeDashboard({ userName, onLogout }: EmployeeDashboardProps) {
  const [activePage, setActivePage] = useState<EmployeePage>('attendance');

  const renderContent = () => {
    switch (activePage) {
      case 'attendance':
        return <EmployeeAttendance userName={userName} />;
      case 'device-health':
        return <EmployeeDeviceHealth />;
      case 'laptop':
        return <AssignedLaptop />;
      default:
        return <EmployeeAttendance userName={userName} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <img src={stLogo} alt="ST Logo" className="h-10 w-auto" />
                <h1 className="text-xl font-bold text-gray-900">ST Employee Portal</h1>
              </div>
              
              <nav className="flex gap-2">
                <button
                  onClick={() => setActivePage('attendance')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                    activePage === 'attendance'
                      ? 'bg-blue-50 text-blue-600 font-medium'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Clock className="w-4 h-4" />
                  Attendance
                </button>
                
                <button
                  onClick={() => setActivePage('device-health')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                    activePage === 'device-health'
                      ? 'bg-blue-50 text-blue-600 font-medium'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Activity className="w-4 h-4" />
                  Device Health
                </button>
                
                <button
                  onClick={() => setActivePage('laptop')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                    activePage === 'laptop'
                      ? 'bg-blue-50 text-blue-600 font-medium'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Laptop className="w-4 h-4" />
                  My Laptop
                </button>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">{userName}</div>
                <div className="text-xs text-gray-500">Employee</div>
              </div>
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                {userName.charAt(0).toUpperCase()}
              </div>
              <button
                onClick={onLogout}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
                title="Logout"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {renderContent()}
      </div>
    </div>
  );
}
