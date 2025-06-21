import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

const mockUser = {
  id: 1,
  name: "Alex Thompson",
  email: "alex.thompson@devbox.com",
  role: "Senior Developer",
  joinDate: "2023-03-15",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format"
};

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<typeof mockUser | null>(null);

 const handleLogin = (name: string, email: string) => {
  const user = {
    ...mockUser,
    name,
    email,
  };
  setUser(user);
  setIsLoggedIn(true);
};

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <LoginForm onLogin={handleLogin} />;
  }

return <Dashboard user={user!} onLogout={handleLogout} />;
};

export default App;
