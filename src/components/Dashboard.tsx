import React, { useEffect, useState } from 'react';
import Header from './Header';
// import StatsCards from './StatsCards';
// import ProfileCard from './ProfileCard';
// import ApiUsageTable from './ApiUsageTable';
import './Dashboard.css'; // ← Import custom styles

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  joinDate: string;
  avatar: string;
};

type ApiCall = {
  id: number;
  apiName: string;
  endpoint: string;
  timestamp: string;
  status: string;
  responseTime: number;
  method: string;
};

type DashboardProps = {
  user: User;
  onLogout: () => void;
};

const mockApiCalls: ApiCall[] = [
  {
    id: 1,
    apiName: "User Authentication API",
    endpoint: "/api/v1/auth/login",
    timestamp: "2024-06-20T10:30:00Z",
    status: "success",
    responseTime: 120,
    method: "POST"
  },
  {
    id: 2,
    apiName: "Data Analytics API",
    endpoint: "/api/v1/analytics/reports",
    timestamp: "2024-06-20T10:25:00Z",
    status: "success",
    responseTime: 340,
    method: "GET"
  },
  {
    id: 3,
    apiName: "File Upload API",
    endpoint: "/api/v1/files/upload",
    timestamp: "2024-06-20T10:20:00Z",
    status: "error",
    responseTime: 2100,
    method: "POST"
  },
  {
    id: 4,
    apiName: "Notification Service",
    endpoint: "/api/v1/notifications/send",
    timestamp: "2024-06-20T10:15:00Z",
    status: "success",
    responseTime: 95,
    method: "POST"
  },
  {
    id: 5,
    apiName: "Database Query API",
    endpoint: "/api/v1/database/query",
    timestamp: "2024-06-20T10:10:00Z",
    status: "warning",
    responseTime: 1200,
    method: "GET"
  },
  {
    id: 6,
    apiName: "Payment Gateway API",
    endpoint: "/api/v1/payments/process",
    timestamp: "2024-06-20T10:05:00Z",
    status: "success",
    responseTime: 450,
    method: "POST"
  }
];

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
  const [apiCalls, setApiCalls] = useState<ApiCall[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApiCalls = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setApiCalls(mockApiCalls);
      setLoading(false);
    };
    fetchApiCalls();
  }, []);

  if (loading) {
    return (
      <div className="dashboard-loader">
        <div className="text-center">
          <div className="spinner"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="container mx-auto px-4 py-8">
        <Header user={user} onLogout={onLogout} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-1">
            {/* <ProfileCard user={user} onLogout={onLogout} /> */}
          </div>
          <div className="lg:col-span-2">
            {/* <StatsCards apiCalls={apiCalls} /> */}
          </div>
        </div>
        {/* <ApiUsageTable apiCalls={apiCalls} /> */}
      </div>
    </div>
  );
};

export default Dashboard;
