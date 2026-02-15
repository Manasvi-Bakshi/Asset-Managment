import { useEffect, useState } from "react";
import { Download, Calendar, TrendingUp, FileText } from "lucide-react";

interface Summary {
  totalEmployees: number;
  totalAssets: number;
  availableAssets: number;
  deployedAssets: number;
  maintenanceAssets: number;
}

export function Reports() {
  const [summary, setSummary] = useState<Summary | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/reports/summary`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setSummary(data.data);
        }
      })
      .catch(err => console.error("Reports fetch failed:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="p-8">Loading reports...</div>;
  }

  if (!summary) {
    return <div className="p-8 text-red-600">Failed to load report summary</div>;
  }

  return (
    <div className="p-8 space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          ST Reports & Analytics
        </h2>
        <p className="text-gray-600">
          System-level operational summary
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <SummaryCard title="Employees" value={summary.totalEmployees} icon={Calendar} />
        <SummaryCard title="Assets" value={summary.totalAssets} icon={FileText} />
        <SummaryCard title="Available" value={summary.availableAssets} icon={TrendingUp} />
        <SummaryCard title="Deployed" value={summary.deployedAssets} icon={FileText} />
        <SummaryCard title="Maintenance" value={summary.maintenanceAssets} icon={FileText} />
      </div>

      {/* Placeholder Export Section */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Report Downloads
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Export functionality will be implemented after full feature completion.
        </p>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm"
          aria-label="Download summary report"
        >
          <Download className="w-4 h-4" />
          Download Summary
        </button>
      </div>
    </div>
  );
}

function SummaryCard({ title, value, icon: Icon }: any) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
      </div>
      <Icon className="w-6 h-6 text-blue-600" />
    </div>
  );
}
