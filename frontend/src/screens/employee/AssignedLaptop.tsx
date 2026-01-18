import { Laptop, Calendar, Shield, Wrench, FileText, CheckCircle } from 'lucide-react';

export function AssignedLaptop() {
  return (
    <div className="space-y-6">
      {/* Main Laptop Card */}
      <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-xl p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="bg-purple-600 p-4 rounded-xl">
              <Laptop className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-purple-900">Dell XPS 15 9520</h2>
              <p className="text-purple-700">Your Assigned Laptop</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Active</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-sm text-gray-600 mb-1">Asset ID</p>
            <p className="text-xl font-bold text-gray-900">ASSET001</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-sm text-gray-600 mb-1">Serial Number</p>
            <p className="text-lg font-mono font-semibold text-gray-900">DXP15-9520-A1B2C3</p>
          </div>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Assignment Details */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-6 h-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Assignment Details</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-3 border-b border-gray-100">
              <span className="text-gray-600">Assigned Date</span>
              <span className="font-semibold text-gray-900">March 15, 2024</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-100">
              <span className="text-gray-600">Department</span>
              <span className="font-semibold text-gray-900">Engineering</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-100">
              <span className="text-gray-600">Assigned By</span>
              <span className="font-semibold text-gray-900">IT Department</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Days in Use</span>
              <span className="font-semibold text-gray-900">307 days</span>
            </div>
          </div>
        </div>

        {/* Warranty Information */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-green-600" />
            <h3 className="text-lg font-semibold text-gray-900">Warranty Information</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-3 border-b border-gray-100">
              <span className="text-gray-600">Warranty Status</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                Active
              </span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-100">
              <span className="text-gray-600">Coverage Period</span>
              <span className="font-semibold text-gray-900">3 Years</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-100">
              <span className="text-gray-600">Expires On</span>
              <span className="font-semibold text-gray-900">March 15, 2027</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Remaining</span>
              <span className="font-semibold text-green-600">1 year, 2 months</span>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-4">
          <FileText className="w-6 h-6 text-purple-600" />
          <h3 className="text-lg font-semibold text-gray-900">Technical Specifications</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Processor</p>
            <p className="font-semibold text-gray-900">Intel Core i7-12700H</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">RAM</p>
            <p className="font-semibold text-gray-900">16 GB DDR5</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Storage</p>
            <p className="font-semibold text-gray-900">512 GB NVMe SSD</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Display</p>
            <p className="font-semibold text-gray-900">15.6" FHD (1920x1080)</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Graphics</p>
            <p className="font-semibold text-gray-900">Intel Iris Xe</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Operating System</p>
            <p className="font-semibold text-gray-900">Windows 11 Pro</p>
          </div>
        </div>
      </div>

      {/* Condition Status */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-4">
          <Wrench className="w-6 h-6 text-orange-600" />
          <h3 className="text-lg font-semibold text-gray-900">Condition & Maintenance</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-600 mb-2">Physical Condition</p>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-green-100 text-green-700 border border-green-200">
                EXCELLENT
              </span>
              <span className="text-sm text-gray-600">No visible damage or wear</span>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Last Maintenance</p>
            <div className="flex items-center gap-3">
              <span className="font-semibold text-gray-900">December 20, 2025</span>
              <span className="text-sm text-gray-600">Software update & cleaning</span>
            </div>
          </div>
        </div>
      </div>

      {/* Important Notes */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="font-semibold text-blue-900 mb-3">Important Information</h3>
        <ul className="space-y-2 text-sm text-blue-800">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>This laptop is ST company property and should be used for work purposes only.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>Report any damage or technical issues to IT support immediately.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>Regular maintenance and software updates are performed automatically.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>Contact IT support at support@st-assets.com for any assistance.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
