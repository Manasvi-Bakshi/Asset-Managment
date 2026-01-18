import { StatCard } from '@/components/common/StatCard';
import { StatusBadge } from '@/components/common/StatusBadge';
import { Laptop, Activity, AlertTriangle, XCircle, Search, Filter } from 'lucide-react';

const deviceData = [
  { id: 'DEV001', assignedTo: 'John Doe', battery: 92, cpu: 'Good', lastCheck: '5 min ago', status: 'healthy' },
  { id: 'DEV002', assignedTo: 'Sarah Smith', battery: 68, cpu: 'Good', lastCheck: '12 min ago', status: 'warning' },
  { id: 'DEV003', assignedTo: 'Mike Johnson', battery: 88, cpu: 'Good', lastCheck: '3 min ago', status: 'healthy' },
  { id: 'DEV004', assignedTo: 'Lisa Brown', battery: 25, cpu: 'High', lastCheck: '8 min ago', status: 'critical' },
  { id: 'DEV005', assignedTo: 'Tom Wilson', battery: 95, cpu: 'Good', lastCheck: '2 min ago', status: 'healthy' },
  { id: 'DEV006', assignedTo: 'Emma Davis', battery: 71, cpu: 'Moderate', lastCheck: '15 min ago', status: 'warning' },
  { id: 'DEV007', assignedTo: 'James Taylor', battery: 18, cpu: 'Critical', lastCheck: '1 min ago', status: 'critical' },
  { id: 'DEV008', assignedTo: 'Sophia Martinez', battery: 85, cpu: 'Good', lastCheck: '6 min ago', status: 'healthy' },
  { id: 'DEV009', assignedTo: 'Oliver Anderson', battery: 78, cpu: 'Good', lastCheck: '10 min ago', status: 'healthy' },
  { id: 'DEV010', assignedTo: 'Ava Garcia', battery: 62, cpu: 'Moderate', lastCheck: '4 min ago', status: 'warning' },
];

export function AdminDeviceHealth() {
  return (
    <div className="p-8 space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Devices" value="248" icon={Laptop} color="blue" />
        <StatCard title="Healthy Devices" value="205" icon={Activity} color="green" />
        <StatCard title="Warning" value="32" icon={AlertTriangle} color="yellow" />
        <StatCard title="Critical" value="11" icon={XCircle} color="red" />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Device Health Monitor</h3>
          <div className="flex gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search devices..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Device ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Assigned To
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Battery Health
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CPU Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Check-in
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {deviceData.map((device) => (
                <tr key={device.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {device.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {device.assignedTo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2 w-24">
                        <div
                          className={`h-2 rounded-full ${
                            device.battery >= 70 ? 'bg-green-500' :
                            device.battery >= 30 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${device.battery}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-700">{device.battery}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm ${
                      device.cpu === 'Good' ? 'text-green-600' :
                      device.cpu === 'Moderate' ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {device.cpu}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {device.lastCheck}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge
                      status={
                        device.status === 'healthy' ? 'success' :
                        device.status === 'warning' ? 'warning' : 'danger'
                      }
                      label={device.status.toUpperCase()}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
