import { useState } from "react";

import { LoginPage } from "@/screens/auth/LoginPage";
import { AdminDashboard } from "@/screens/admin/AdminDashboard";
import { EmployeeDashboard } from "@/screens/employee/EmployeeDashboard";


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
