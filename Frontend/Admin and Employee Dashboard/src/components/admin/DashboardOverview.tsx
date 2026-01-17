import { StatCard } from '../StatCard';
import { Users, CheckCircle, XCircle, Clock, Laptop, Activity, AlertTriangle } from 'lucide-react';

export function DashboardOverview() {
  return (
    <div className="p-8 space-y-6">
      {/* Attendance Stats */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Attendance Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Employees"
            value="248"
            icon={Users}
            color="blue"
            subtitle="Active workforce"
          />
          <StatCard
            title="Present Today"
            value="215"
            icon={CheckCircle}
            color="green"
            subtitle="86.7% attendance"
          />
          <StatCard
            title="Absent"
            value="28"
            icon={XCircle}
            color="red"
            subtitle="11.3% absent"
          />
          <StatCard
            title="Late Entries"
            value="5"
            icon={Clock}
            color="yellow"
            subtitle="After 9:30 AM"
          />
        </div>
      </div>

      {/* Device Health Stats */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Health Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Devices"
            value="248"
            icon={Laptop}
            color="blue"
            subtitle="Assigned laptops"
          />
          <StatCard
            title="Healthy"
            value="205"
            icon={Activity}
            color="green"
            subtitle="82.7% healthy"
          />
          <StatCard
            title="Warning"
            value="32"
            icon={AlertTriangle}
            color="yellow"
            subtitle="Needs attention"
          />
          <StatCard
            title="Critical"
            value="11"
            icon={XCircle}
            color="red"
            subtitle="Immediate action"
          />
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {[
            { time: '09:15 AM', event: 'John Doe marked present (Auto)', type: 'success' },
            { time: '09:18 AM', event: 'Sarah Smith - Device battery warning (68%)', type: 'warning' },
            { time: '09:22 AM', event: 'Mike Johnson marked present (Auto)', type: 'success' },
            { time: '09:35 AM', event: 'Lisa Brown marked late (Manual)', type: 'warning' },
            { time: '09:40 AM', event: 'New laptop assigned to Tom Wilson', type: 'info' },
          ].map((activity, index) => (
            <div key={index} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0">
              <span className="text-xs text-gray-500 min-w-[70px]">{activity.time}</span>
              <div className="flex-1">
                <p className="text-sm text-gray-700">{activity.event}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded ${
                activity.type === 'success' ? 'bg-green-100 text-green-700' :
                activity.type === 'warning' ? 'bg-yellow-100 text-yellow-700' :
                'bg-blue-100 text-blue-700'
              }`}>
                {activity.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
