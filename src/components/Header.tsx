import React from 'react';

type HeaderProps = {
  user: {
    name: string;
  };
  onLogout: () => void;
};

const Header: React.FC<HeaderProps> = ({ user, onLogout }) => {
  return (
    <div className="dashboard-header flex justify-between items-center">
      <div>
        <h1 className="text-4xl font-bold text-black mb-1">Developer Dashboard</h1>
        <p className="text-black">Welcome back, {user.name}! Here's your API usage overview.</p>
      </div>
      <button
        onClick={onLogout}
        className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg shadow"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
