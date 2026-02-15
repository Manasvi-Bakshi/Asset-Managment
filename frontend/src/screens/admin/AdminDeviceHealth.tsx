import { StatCard } from '@/components/common/StatCard';
import { StatusBadge } from '@/components/common/StatusBadge';
import { Laptop, Activity, AlertTriangle, XCircle, Search, Filter } from 'lucide-react';

import { useEffect, useState } from "react";
import { fetchAssets } from "@/api/assets";
import type { Asset as BackendAsset } from "@/types/asset";

/*const deviceData = [
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
];*/

interface Device {
  id: string;
  battery: number;
  cpu: string;
  lastCheck: string;
  status: "healthy" | "warning" | "critical";
}

/* ---------------------------
   Mapping Backend → Device
---------------------------- */

function mapAssetToDevice(asset: BackendAsset): Device {
  let status: "healthy" | "warning" | "critical";
  let battery: number;
  let cpu: string;

  if (asset.status === "AVAILABLE") {
    status = "healthy";
    battery = 90;
    cpu = "Good";
  } else if (asset.status === "DEPLOYED") {
    status = "warning";
    battery = 65;
    cpu = "Moderate";
  } else {
    status = "critical";
    battery = 25;
    cpu = "Critical";
  }

  return {
    id: asset.asset_code,
    battery,
    cpu,
    lastCheck: "Just now",
    status,
  };
}

export function AdminDeviceHealth() {
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAssets()
      .then((assets) => {
        const mapped = assets.map(mapAssetToDevice);
        setDevices(mapped);
      })
      .catch((err) => {
        console.error("Device health fetch failed:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="p-8">Loading device health...</div>;
  }

  const total = devices.length;
  const healthy = devices.filter(d => d.status === "healthy").length;
  const warning = devices.filter(d => d.status === "warning").length;
  const critical = devices.filter(d => d.status === "critical").length;

  return (
    <div className="p-8 space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Devices" value={total.toString()} icon={Laptop} color="blue" />
        <StatCard title="Healthy Devices" value={healthy.toString()} icon={Activity} color="green" />
        <StatCard title="Warning" value={warning.toString()} icon={AlertTriangle} color="yellow" />
        <StatCard title="Critical" value={critical.toString()} icon={XCircle} color="red" />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">
            Device Health Monitor
          </h3>
          <div className="flex gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                aria-label="Search devices"
                placeholder="Search devices..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>
            <button
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm"
              aria-label="Filter devices"
            >
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Device ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Battery
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  CPU
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Last Check-in
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {devices.map((device) => (
                <tr key={device.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 text-sm font-medium">
                    {device.id}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2 w-24">
                        <div
                          className={`h-2 rounded-full ${
                            device.battery >= 70
                              ? "bg-green-500"
                              : device.battery >= 30
                              ? "bg-yellow-500"
                              : "bg-red-500"
                          }`}
                          style={{ width: `${device.battery}%` }}
                        />
                      </div>
                      <span className="text-sm">{device.battery}%</span>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-sm">{device.cpu}</td>
                  <td className="px-6 py-4 text-sm">{device.lastCheck}</td>

                  <td className="px-6 py-4">
                    <StatusBadge
                      status={
                        device.status === "healthy"
                          ? "success"
                          : device.status === "warning"
                          ? "warning"
                          : "danger"
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