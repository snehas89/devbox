import React from 'react';
import { User, LogOut } from 'lucide-react'; 

type UserType = {
  id: number;
  name: string;
  email: string;
  role: string;
  joinDate: string;
  avatar: string;
};

type ProfileCardProps = {
  user: UserType;
  onLogout: () => void;
};

const ProfileCard: React.FC<ProfileCardProps> = ({ user, onLogout }) => {
  return (
    <div style={styles.card}>
      {/* Header Row */}
      <div style={styles.headerRow}>
        <h2 style={styles.title}>
          <User size={18} color="#2563eb" style={{ marginRight: '8px' }} />
          Profile
        </h2>
        <button onClick={onLogout} style={styles.logoutBtn}>
          <LogOut size={16} style={{ marginRight: '6px' }} />
          Logout
        </button>
      </div>

      {/* Avatar & Info */}
      <div style={styles.profileRow}>
        <img src={user.avatar} alt={user.name} style={styles.avatar} />
        <div>
          <h3 style={styles.name}>{user.name}</h3>
          <p style={styles.role}>{user.role}</p>
          <p style={styles.email}>{user.email}</p>
        </div>
      </div>

      {/* Join Date */}
      <div style={styles.joinDateBox}>
        <p style={styles.joinLabel}>Member since</p>
        <p style={styles.joinDate}>
          {new Date(user.joinDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    backgroundColor: '#ffffff',
    padding: '24px',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
    border: '1px solid #e5e7eb',
    width: '100%',
    maxWidth: '1000px',
    margin: '10px 100px'
  },
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px'
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#1f2937',
    display: 'flex',
    alignItems: 'center'
  },
  logoutBtn: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 12px',
    backgroundColor: 'transparent',
    color: '#dc2626',
    border: '1px solid transparent',
    borderRadius: '8px',
    cursor: 'pointer'
  },
  profileRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '16px'
  },
  avatar: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid #bfdbfe'
  },
  name: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '4px'
  },
  role: {
    color: '#4b5563',
    marginBottom: '2px'
  },
  email: {
    fontSize: '14px',
    color: '#6b7280'
  },
  joinDateBox: {
    background: 'linear-gradient(to right, #eff6ff, #f5f3ff)',
    padding: '16px',
    borderRadius: '12px'
  },
  joinLabel: {
    fontSize: '13px',
    color: '#6b7280',
    marginBottom: '4px'
  },
  joinDate: {
    fontWeight: 600,
    color: '#1f2937'
  }
};

export default ProfileCard;
