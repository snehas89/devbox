import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import ProfileCard from './Profilecard';
import StatsCards from './Statscard';
import ApiCallsTable from './Apicallstable';

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
  },
  {
    id: 7,
    apiName: " Gateway API",
    endpoint: "/api/v1/payments/call",
    timestamp: "2024-06-20T10:05:00Z",
    status: "error",
    responseTime: 1450,
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
          <p>Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="dashboard-header" style={{ position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: '32px', color: 'black' }}>Developer Dashboard</h1>
            <p style={{ color: 'black' }}>
              Welcome back, {user.name}! Here's your API usage overview.
            </p>
          </div>

          {/* Avatar Hover Section */}
          <div className="profile-hover-wrapper">
            <img
              src={user.avatar}
              alt="avatar"
              className="profile-avatar"
            />
            <div className="profile-card-hover">
              <ProfileCard user={user} onLogout={onLogout} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="dashboard-main">
        <StatsCards apiCalls={apiCalls} />
        <ApiCallsTable apiCalls={apiCalls} />
      </div>
    </div>
  );
};

export default Dashboard;
