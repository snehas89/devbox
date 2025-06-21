import React from 'react';
import { Activity, CheckCircle, XCircle, Clock } from 'lucide-react';

type ApiCall = {
  id: number;
  apiName: string;
  endpoint: string;
  timestamp: string;
  status: string;
  responseTime: number;
  method: string;
};

type StatsCardsProps = {
  apiCalls: ApiCall[];
};

const StatsCards: React.FC<StatsCardsProps> = ({ apiCalls }) => {
  const totalCalls = apiCalls.length;
  const successCalls = apiCalls.filter(call => call.status === 'success').length;
  const errorCalls = apiCalls.filter(call => call.status === 'error').length;
  const avgResponseTime = totalCalls
    ? Math.round(apiCalls.reduce((sum, call) => sum + call.responseTime, 0) / totalCalls)
    : 0;

  const stats = [
    {
      title: 'Total API Calls',
      value: totalCalls,
      icon: Activity,
      color: '#2563eb',
      bgColor: '#dbeafe'
    },
    {
      title: 'Successful Calls',
      value: successCalls,
      icon: CheckCircle,
      color: '#16a34a',
      bgColor: '#dcfce7'
    },
    {
      title: 'Failed Calls',
      value: errorCalls,
      icon: XCircle,
      color: '#dc2626',
      bgColor: '#fee2e2'
    },
    {
      title: 'Avg Response Time',
      value: `${avgResponseTime}ms`,
      icon: Clock,
      color: '#7e22ce',
      bgColor: '#f3e8ff'
    }
  ];

  return (
    <div style={styles.grid}>
      {stats.map((stat, index) => (
        <div key={index} style={styles.card}>
          <div style={styles.cardHeader}>
            <div style={{ ...styles.iconContainer, backgroundColor: stat.bgColor }}>
              <stat.icon size={24} color={stat.color} />
            </div>
          </div>
          <h3 style={styles.value}>{stat.value}</h3>
          <p style={styles.label}>{stat.title}</p>
        </div>
      ))}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px',
    marginBottom: '2rem'
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
    border: '1px solid #f3f4f6',
    margin: '30px',
    transition: 'box-shadow 0.3s ease-in-out'
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '16px'
  },
  iconContainer: {
    padding: '12px',
    borderRadius: '12px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  value: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '4px'
  },
  label: {
    fontSize: '14px',
    color: '#6b7280'
  }
};

export default StatsCards;
