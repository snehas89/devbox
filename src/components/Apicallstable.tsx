import React from 'react';
import { CheckCircle, XCircle, AlertCircle, Clock, Zap, Database } from 'lucide-react';

type ApiCall = {
  id: number;
  apiName: string;
  endpoint: string;
  timestamp: string;
  status: string;
  responseTime: number;
  method: string;
};

type Props = {
  apiCalls: ApiCall[];
};

const ApiCallsTable: React.FC<Props> = ({ apiCalls }) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle color="green" size={16} />;
      case 'error':
        return <XCircle color="red" size={16} />;
      case 'warning':
        return <AlertCircle color="orange" size={16} />;
      default:
        return <Clock color="gray" size={16} />;
    }
  };

  const getMethodStyle = (method: string): React.CSSProperties => {
    const base: React.CSSProperties = {
      padding: '4px 8px',
      borderRadius: '6px',
      fontSize: '12px',
      fontFamily: 'monospace',
      fontWeight: 'bold',
      display: 'inline-block'
    };
    switch (method) {
      case 'GET':
        return { ...base, backgroundColor: '#dbeafe', color: '#1d4ed8' };
      case 'POST':
        return { ...base, backgroundColor: '#dcfce7', color: '#15803d' };
      case 'PUT':
        return { ...base, backgroundColor: '#fef9c3', color: '#ca8a04' };
      case 'DELETE':
        return { ...base, backgroundColor: '#fee2e2', color: '#b91c1c' };
      default:
        return { ...base, backgroundColor: '#e5e7eb', color: '#374151' };
    }
  };

  const getStatusStyle = (status: string): React.CSSProperties => {
    const base: React.CSSProperties = {
      padding: '4px 10px',
      borderRadius: '999px',
      fontSize: '12px',
      fontWeight: 'bold',
      display: 'inline-block'
    };
    switch (status) {
      case 'success':
        return { ...base, backgroundColor: '#dcfce7', color: '#166534' };
      case 'error':
        return { ...base, backgroundColor: '#fee2e2', color: '#991b1b' };
      case 'warning':
        return { ...base, backgroundColor: '#fef9c3', color: '#854d0e' };
      default:
        return { ...base, backgroundColor: '#f3f4f6', color: '#374151' };
    }
  };

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h2 style={styles.title}>
          <Database size={18} style={{ marginRight: 8 }} color="#2563eb" />
          Recent API Calls
        </h2>
        <p style={styles.subtitle}>Latest API usage statistics</p>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table style={styles.table}>
          <thead style={styles.tableHead}>
            <tr>
              <th style={styles.th}>API Name</th>
              <th style={styles.th}>Method</th>
              <th style={styles.th}>Endpoint</th>
              <th style={styles.th}>Time</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Response Time</th>
            </tr>
          </thead>
          <tbody>
            {apiCalls.map((call) => (
              <tr key={call.id} style={styles.tr}>
                <td style={styles.td}>
                  <div style={styles.flex}>
                    <div style={styles.apiIcon}>
                      <Zap size={14} color="#2563eb" />
                    </div>
                    <span>{call.apiName}</span>
                  </div>
                </td>
                <td style={styles.td}>
                  <span style={getMethodStyle(call.method)}>{call.method}</span>
                </td>
                <td style={styles.td}>
                  <code style={styles.endpoint}>{call.endpoint}</code>
                </td>
                <td style={styles.td}>
                  {new Date(call.timestamp).toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </td>
                <td style={styles.td}>
                  <div style={styles.flex}>
                    {getStatusIcon(call.status)}
                    <span style={{ marginLeft: 6, ...getStatusStyle(call.status) }}>
                      {call.status}
                    </span>
                  </div>
                </td>
                <td style={styles.td}>
                  <span
                    style={{
                      fontWeight: 600,
                      color:
                        call.responseTime > 1000
                          ? '#dc2626'
                          : call.responseTime > 500
                          ? '#ca8a04'
                          : '#16a34a'
                    }}
                  >
                    {call.responseTime}ms
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
    border: '1px solid #e5e7eb',
    overflow: 'hidden',
    marginTop: '2rem'
  },
  header: {
    padding: '24px',
    borderBottom: '1px solid #e5e7eb'
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#1f2937',
    display: 'flex',
    alignItems: 'center'
  },
  subtitle: {
    color: '#6b7280',
    fontSize: '14px',
    marginTop: '4px'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  tableHead: {
    backgroundColor: '#f9fafb'
  },
  th: {
    textAlign: 'left',
    padding: '16px',
    fontSize: '12px',
    fontWeight: 600,
    color: '#6b7280',
    textTransform: 'uppercase'
  },
  tr: {
    borderBottom: '1px solid #f3f4f6'
  },
  td: {
    padding: '16px',
    fontSize: '14px',
    color: '#374151'
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  apiIcon: {
    backgroundColor: '#dbeafe',
    padding: '8px',
    borderRadius: '8px',
    marginRight: '10px'
  },
  endpoint: {
    backgroundColor: '#f3f4f6',
    padding: '4px 8px',
    borderRadius: '6px',
    fontFamily: 'monospace',
    fontSize: '13px'
  }
};

export default ApiCallsTable;
