import { CheckCircle, MapPin, Wifi } from 'lucide-react';

interface EmployeeAttendanceProps {
  userName: string;
}

export function EmployeeAttendance({ userName }: EmployeeAttendanceProps) {
  return (
    <div className="space-y-6">
      {/* Auto-marked Status Card */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-xl p-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-green-900">Present</h2>
            </div>
            <p className="text-green-700">You're marked as present for today</p>
          </div>
          <div className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
            Auto-marked
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-sm text-gray-600 mb-1">Time In</p>
            <p className="text-2xl font-bold text-gray-900">9:12 AM</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <MapPin className="w-4 h-4 text-gray-500" />
              <p className="text-sm text-gray-600">Location</p>
            </div>
            <p className="text-lg font-semibold text-gray-900">Office Campus</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <Wifi className="w-4 h-4 text-gray-500" />
              <p className="text-sm text-gray-600">Detection Method</p>
            </div>
            <p className="text-lg font-semibold text-gray-900">Campus Network</p>
          </div>
        </div>

        <div className="mt-6 bg-white rounded-lg p-4 border-l-4 border-blue-500">
          <p className="text-sm text-gray-700">
            <strong>Auto Attendance:</strong> Your attendance is automatically marked when you enter the office campus.
            The system uses Wi-Fi network verification and GPS location to confirm your presence.
          </p>
        </div>
      </div>

      {/* Attendance History */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">This Week's Attendance</h3>
        <div className="space-y-3">
          {[
            { date: 'Monday, Jan 13', status: 'Present', timeIn: '9:05 AM', timeOut: '6:15 PM' },
            { date: 'Tuesday, Jan 14', status: 'Present', timeIn: '8:58 AM', timeOut: '6:20 PM' },
            { date: 'Wednesday, Jan 15', status: 'Present', timeIn: '9:10 AM', timeOut: '6:10 PM' },
            { date: 'Thursday, Jan 16', status: 'Present', timeIn: '9:12 AM', timeOut: '-' },
            { date: 'Friday, Jan 17', status: 'Upcoming', timeIn: '-', timeOut: '-' },
          ].map((day, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-4 rounded-lg border ${
                day.status === 'Present' ? 'bg-green-50 border-green-200' :
                day.status === 'Upcoming' ? 'bg-gray-50 border-gray-200' : 'bg-red-50 border-red-200'
              }`}
            >
              <div className="flex-1">
                <p className="font-medium text-gray-900">{day.date}</p>
                <p className="text-sm text-gray-600">
                  {day.timeIn !== '-' && `In: ${day.timeIn}`}
                  {day.timeOut !== '-' && ` • Out: ${day.timeOut}`}
                  {day.status === 'Upcoming' && 'Not yet started'}
                </p>
              </div>
              <div>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  day.status === 'Present' ? 'bg-green-100 text-green-700' :
                  day.status === 'Upcoming' ? 'bg-gray-200 text-gray-600' : 'bg-red-100 text-red-700'
                }`}>
                  {day.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Monthly Summary */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">January 2026 Summary</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <p className="text-3xl font-bold text-blue-600">16</p>
            <p className="text-sm text-gray-600 mt-1">Working Days</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <p className="text-3xl font-bold text-green-600">14</p>
            <p className="text-sm text-gray-600 mt-1">Present</p>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <p className="text-3xl font-bold text-yellow-600">1</p>
            <p className="text-sm text-gray-600 mt-1">Late</p>
          </div>
          <div className="text-center p-4 bg-red-50 rounded-lg">
            <p className="text-3xl font-bold text-red-600">1</p>
            <p className="text-sm text-gray-600 mt-1">Absent</p>
          </div>
        </div>
      </div>
    </div>
  );
}
