import { useState } from 'react';
import { UserRole } from '@/App';
import stLogo from 'figma:asset/8a2a604d8afe75e33045de09e7f0260bf54a57ec.png';

interface LoginPageProps {
  onLogin: (role: UserRole, name: string) => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [selectedRole, setSelectedRole] = useState<'admin' | 'employee'>('admin');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onLogin(selectedRole, name.trim());
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <img src={stLogo} alt="ST Logo" className="h-20 w-auto" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">ST Asset Management System</h1>
          <p className="text-gray-600">Select your role and login</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Select Role
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setSelectedRole('admin')}
                className={`p-6 border-2 rounded-lg transition-all ${
                  selectedRole === 'admin'
                    ? 'border-blue-600 bg-blue-50 shadow-md'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">👨‍💼</div>
                  <div className="font-semibold text-gray-900">Admin</div>
                  <div className="text-xs text-gray-500 mt-1">Full access</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedRole('employee')}
                className={`p-6 border-2 rounded-lg transition-all ${
                  selectedRole === 'employee'
                    ? 'border-blue-600 bg-blue-50 shadow-md'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">👤</div>
                  <div className="font-semibold text-gray-900">Employee</div>
                  <div className="text-xs text-gray-500 mt-1">User access</div>
                </div>
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Login as {selectedRole === 'admin' ? 'Admin' : 'Employee'}
          </button>
        </form>
      </div>
    </div>
  );
}
