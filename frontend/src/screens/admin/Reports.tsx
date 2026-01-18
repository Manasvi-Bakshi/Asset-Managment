import { Download, Calendar, TrendingUp, FileText } from 'lucide-react';

export function Reports() {
  const reportTypes = [
    {
      title: 'Monthly Attendance Report',
      description: 'Comprehensive attendance data for the current month',
      icon: Calendar,
      color: 'blue',
    },
    {
      title: 'Device Health Analytics',
      description: 'Device performance and health trends over time',
      icon: TrendingUp,
      color: 'green',
    },
    {
      title: 'Asset Inventory Report',
      description: 'Complete list of all assets with current status',
      icon: FileText,
      color: 'purple',
    },
    {
      title: 'Department-wise Summary',
      description: 'Attendance and device metrics grouped by department',
      icon: FileText,
      color: 'orange',
    },
  ];

  return (
    <div className="p-8 space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">ST Reports & Analytics</h2>
        <p className="text-gray-600">Generate and download comprehensive system reports</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reportTypes.map((report, index) => {
          const Icon = report.icon;
          return (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-${report.color}-50`}>
                  <Icon className={`w-6 h-6 text-${report.color}-600`} />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{report.title}</h3>
              <p className="text-sm text-gray-600">{report.description}</p>
            </div>
          );
        })}
      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Downloads</h3>
        <div className="space-y-3">
          {[
            { name: 'Monthly_Attendance_December_2025.pdf', date: 'Jan 10, 2026', size: '2.4 MB' },
            { name: 'Device_Health_Report_Q4_2025.xlsx', date: 'Jan 08, 2026', size: '1.8 MB' },
            { name: 'Asset_Inventory_January_2026.pdf', date: 'Jan 05, 2026', size: '3.1 MB' },
          ].map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{file.name}</p>
                  <p className="text-xs text-gray-500">{file.date} • {file.size}</p>
                </div>
              </div>
              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded transition">
                <Download className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
