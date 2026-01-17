import { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { AdminDashboard } from './components/AdminDashboard';
import { EmployeeDashboard } from './components/EmployeeDashboard';

export type UserRole = 'admin' | 'employee' | null;

export default function App() {
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [userName, setUserName] = useState<string>('');

  const handleLogin = (role: UserRole, name: string) => {
    setUserRole(role);
    setUserName(name);
  };

  const handleLogout = () => {
    setUserRole(null);
    setUserName('');
  };

  if (!userRole) {
    return <LoginPage onLogin={handleLogin} />;
  }

  if (userRole === 'admin') {
    return <AdminDashboard userName={userName} onLogout={handleLogout} />;
  }

  return <EmployeeDashboard userName={userName} onLogout={handleLogout} />;
}
