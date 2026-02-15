import { useEffect, useState } from "react";
import { StatCard } from "@/components/common/StatCard";
import {
  Users,
  CheckCircle,
  XCircle,
  Clock,
  Laptop,
  Activity,
  AlertTriangle,
} from "lucide-react";

import { fetchEmployees } from "@/api/employees";
import { fetchAssets } from "@/api/assets";

export function DashboardOverview() {
  const [employeeCount, setEmployeeCount] = useState(0);
  const [assetCount, setAssetCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([fetchEmployees(), fetchAssets()])
      .then(([employees, assets]) => {
        setEmployeeCount(employees.length);
        setAssetCount(assets.length);
      })
      .catch((err) => {
        console.error("Dashboard fetch failed:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="p-8">Loading dashboard...</div>;
  }

  return (
    <div className="p-8 space-y-6">
      {/* Attendance Stats */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Attendance Overview
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Employees"
            value={employeeCount.toString()}
            icon={Users}
            color="blue"
            subtitle="Active workforce"
          />
          <StatCard
            title="Present Today"
            value={employeeCount.toString()}
            icon={CheckCircle}
            color="green"
            subtitle="Temporary logic"
          />
          <StatCard
            title="Absent"
            value="0"
            icon={XCircle}
            color="red"
            subtitle="Temporary logic"
          />
          <StatCard
            title="Late Entries"
            value="0"
            icon={Clock}
            color="yellow"
            subtitle="Temporary logic"
          />
        </div>
      </div>

      {/* Device Stats */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Device Overview
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Devices"
            value={assetCount.toString()}
            icon={Laptop}
            color="blue"
            subtitle="Registered assets"
          />
          <StatCard
            title="Available"
            value="—"
            icon={Activity}
            color="green"
            subtitle="Status breakdown later"
          />
          <StatCard
            title="Maintenance"
            value="—"
            icon={AlertTriangle}
            color="yellow"
            subtitle="Status breakdown later"
          />
          <StatCard
            title="Deployed"
            value="—"
            icon={XCircle}
            color="red"
            subtitle="Status breakdown later"
          />
        </div>
      </div>

      {/* Recent Activity (Keep Mock For Now) */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Recent Activity
        </h3>
        <div className="text-sm text-gray-500">
          Activity tracking will be implemented after full feature wiring.
        </div>
      </div>
    </div>
  );
}
