import { useState } from "react";

import { LoginPage } from "@/screens/auth/LoginPage";
import { AdminDashboard } from "@/screens/admin/AdminDashboard";
import { EmployeeDashboard } from "@/screens/employee/EmployeeDashboard";

export type UserRole = 'admin' | 'employee' | null;

export default function App() {
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [userName, setUserName] = useState<string>('');
  const [employeeEuid, setEmployeeEuid] = useState<string>('');

  const handleLogin = (role: UserRole, name: string) => {
    setUserRole(role);

    if (role === 'employee') {
      // Treat input as EUID
      setEmployeeEuid(name.trim().toUpperCase());
      setUserName(name.trim().toUpperCase());
    } else {
      setUserName(name.trim());
    }
  };

  const handleLogout = () => {
    setUserRole(null);
    setUserName('');
    setEmployeeEuid('');
  };

  if (!userRole) {
    return <LoginPage onLogin={handleLogin} />;
  }

  if (userRole === 'admin') {
    return <AdminDashboard userName={userName} onLogout={handleLogout} />;
  }

  return (
    <EmployeeDashboard
      userName={userName}
      employeeEuid={employeeEuid}
      onLogout={handleLogout}
    />
  );
}
