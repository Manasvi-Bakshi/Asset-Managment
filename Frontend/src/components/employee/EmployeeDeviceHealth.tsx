import { Battery, Cpu, HardDrive, Activity, CheckCircle, AlertTriangle } from 'lucide-react';

export function EmployeeDeviceHealth() {
  const deviceMetrics = [
    { label: 'Battery Health', value: 92, icon: Battery, status: 'good', color: 'green' },
    { label: 'CPU Performance', value: 78, icon: Cpu, status: 'good', color: 'green' },
    { label: 'Storage Available', value: 65, icon: HardDrive, status: 'warning', color: 'yellow' },
    { label: 'Overall Health', value: 88, icon: Activity, status: 'good', color: 'green' },
  ];

  return (
    <div className="space-y-6">
      {/* Device Status Card */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-2">Dell XPS 15</h2>
            <p className="text-blue-700">Your assigned device is healthy</p>
          </div>
          <div className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Healthy</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {deviceMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Icon className={`w-5 h-5 text-${metric.color}-600`} />
                  <p className="text-sm text-gray-600">{metric.label}</p>
                </div>
                <div className="mb-2">
                  <div className="flex items-end gap-2">
                    <p className="text-2xl font-bold text-gray-900">{metric.value}%</p>
                    {metric.status === 'warning' && (
                      <AlertTriangle className="w-5 h-5 text-yellow-500 mb-1" />
                    )}
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      metric.value >= 80 ? 'bg-green-500' :
                      metric.value >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${metric.value}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Battery Details */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <Battery className="w-6 h-6 text-green-600" />
            <h3 className="text-lg font-semibold text-gray-900">Battery Health</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Current Charge</span>
              <span className="font-semibold text-gray-900">92%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Cycle Count</span>
              <span className="font-semibold text-gray-900">142</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Design Capacity</span>
              <span className="font-semibold text-gray-900">86.4 Wh</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Last Full Charge</span>
              <span className="font-semibold text-gray-900">2 hours ago</span>
            </div>
          </div>
        </div>

        {/* Storage Details */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <HardDrive className="w-6 h-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Storage</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Capacity</span>
              <span className="font-semibold text-gray-900">512 GB</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Used Space</span>
              <span className="font-semibold text-gray-900">332 GB</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Available</span>
              <span className="font-semibold text-green-600">180 GB</span>
            </div>
            <div className="mt-3">
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-blue-600 h-3 rounded-full" style={{ width: '65%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* System Information */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">System Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-600">Processor</span>
            <span className="font-medium text-gray-900">Intel Core i7-12700H</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-600">RAM</span>
            <span className="font-medium text-gray-900">16 GB DDR5</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-600">Operating System</span>
            <span className="font-medium text-gray-900">Windows 11 Pro</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-600">Last System Scan</span>
            <span className="font-medium text-gray-900">5 minutes ago</span>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-yellow-900 mb-2">Recommendation</h3>
            <p className="text-sm text-yellow-800">
              Your storage is getting low. Consider removing unused files or applications to improve performance.
              Contact IT support if you need assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
