// import React, { useState, useEffect } from 'react';
// import { User, Activity, Clock, CheckCircle, XCircle, AlertCircle, LogOut, Code, Zap, Database } from 'lucide-react';

// // Mock data
// const mockUser = {
//   id: 1,
//   name: "Alex Thompson",
//   email: "alex.thompson@devbox.com",
//   role: "Senior Developer",
//   joinDate: "2023-03-15",
//   avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format"
// };

// const mockApiCalls = [
//   {
//     id: 1,
//     apiName: "User Authentication API",
//     endpoint: "/api/v1/auth/login",
//     timestamp: "2024-06-20T10:30:00Z",
//     status: "success",
//     responseTime: 120,
//     method: "POST"
//   },
//   {
//     id: 2,
//     apiName: "Data Analytics API",
//     endpoint: "/api/v1/analytics/reports",
//     timestamp: "2024-06-20T10:25:00Z",
//     status: "success",
//     responseTime: 340,
//     method: "GET"
//   },
//   {
//     id: 3,
//     apiName: "File Upload API",
//     endpoint: "/api/v1/files/upload",
//     timestamp: "2024-06-20T10:20:00Z",
//     status: "error",
//     responseTime: 2100,
//     method: "POST"
//   },
//   {
//     id: 4,
//     apiName: "Notification Service",
//     endpoint: "/api/v1/notifications/send",
//     timestamp: "2024-06-20T10:15:00Z",
//     status: "success",
//     responseTime: 95,
//     method: "POST"
//   },
//   {
//     id: 5,
//     apiName: "Database Query API",
//     endpoint: "/api/v1/database/query",
//     timestamp: "2024-06-20T10:10:00Z",
//     status: "warning",
//     responseTime: 1200,
//     method: "GET"
//   },
//   {
//     id: 6,
//     apiName: "Payment Gateway API",
//     endpoint: "/api/v1/payments/process",
//     timestamp: "2024-06-20T10:05:00Z",
//     status: "success",
//     responseTime: 450,
//     method: "POST"
//   }
// ];

// // Login Component
// const LoginScreen = ({ onLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = () => {
//     if (email && password) {
//       onLogin();
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
//       <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md border border-white/20 shadow-2xl">
//         <div className="text-center mb-8">
//           <div className="bg-gradient-to-r from-blue-400 to-purple-400 w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center">
//             <Code className="w-8 h-8 text-white" />
//           </div>
//           <h1 className="text-3xl font-bold text-white mb-2">Devbox Portal</h1>
//           <p className="text-blue-200">Developer Dashboard</p>
//         </div>
        
//         <div className="space-y-6">
//           <div>
//             <label className="block text-sm font-medium text-blue-200 mb-2">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
//               placeholder="Enter your email"
//             />
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-blue-200 mb-2">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
//               placeholder="Enter your password"
//             />
//           </div>
          
//           <button
//             onClick={handleSubmit}
//             className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
//           >
//             Sign In
//           </button>
//         </div>
        
//         <p className="text-center text-blue-300 text-sm mt-6">
//           Demo credentials: any email/password combination
//         </p>
//       </div>
//     </div>
//   );
// };

// // Profile Card Component
// const ProfileCard = ({ user, onLogout }) => {
//   return (
//     <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
//           <User className="w-5 h-5 text-blue-600" />
//           Profile
//         </h2>
//         <button
//           onClick={onLogout}
//           className="flex items-center gap-2 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
//         >
//           <LogOut className="w-4 h-4" />
//           Logout
//         </button>
//       </div>
      
//       <div className="flex items-center gap-4 mb-4">
//         <img
//           src={user.avatar}
//           alt={user.name}
//           className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
//         />
//         <div>
//           <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
//           <p className="text-gray-600">{user.role}</p>
//           <p className="text-sm text-gray-500">{user.email}</p>
//         </div>
//       </div>
      
//       <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
//         <p className="text-sm text-gray-600 mb-1">Member since</p>
//         <p className="font-semibold text-gray-800">
//           {new Date(user.joinDate).toLocaleDateString('en-US', {
//             year: 'numeric',
//             month: 'long',
//             day: 'numeric'
//           })}
//         </p>
//       </div>
//     </div>
//   );
// };

// // Stats Cards Component
// const StatsCards = ({ apiCalls }) => {
//   const totalCalls = apiCalls.length;
//   const successCalls = apiCalls.filter(call => call.status === 'success').length;
//   const errorCalls = apiCalls.filter(call => call.status === 'error').length;
//   const avgResponseTime = Math.round(
//     apiCalls.reduce((sum, call) => sum + call.responseTime, 0) / totalCalls
//   );

//   const stats = [
//     {
//       title: 'Total API Calls',
//       value: totalCalls,
//       icon: Activity,
//       color: 'blue',
//       bgColor: 'bg-blue-50',
//       textColor: 'text-blue-600'
//     },
//     {
//       title: 'Successful Calls',
//       value: successCalls,
//       icon: CheckCircle,
//       color: 'green',
//       bgColor: 'bg-green-50',
//       textColor: 'text-green-600'
//     },
//     {
//       title: 'Failed Calls',
//       value: errorCalls,
//       icon: XCircle,
//       color: 'red',
//       bgColor: 'bg-red-50',
//       textColor: 'text-red-600'
//     },
//     {
//       title: 'Avg Response Time',
//       value: `${avgResponseTime}ms`,
//       icon: Clock,
//       color: 'purple',
//       bgColor: 'bg-purple-50',
//       textColor: 'text-purple-600'
//     }
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//       {stats.map((stat, index) => (
//         <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
//           <div className="flex items-center justify-between mb-4">
//             <div className={`p-3 rounded-xl ${stat.bgColor}`}>
//               <stat.icon className={`w-6 h-6 ${stat.textColor}`} />
//             </div>
//           </div>
//           <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</h3>
//           <p className="text-gray-600 text-sm">{stat.title}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// // API Calls Table Component
// const ApiCallsTable = ({ apiCalls }) => {
//   const getStatusIcon = (status) => {
//     switch (status) {
//       case 'success':
//         return <CheckCircle className="w-5 h-5 text-green-500" />;
//       case 'error':
//         return <XCircle className="w-5 h-5 text-red-500" />;
//       case 'warning':
//         return <AlertCircle className="w-5 h-5 text-yellow-500" />;
//       default:
//         return <Clock className="w-5 h-5 text-gray-500" />;
//     }
//   };

//   const getStatusBadge = (status) => {
//     const baseClasses = "px-3 py-1 rounded-full text-xs font-semibold";
//     switch (status) {
//       case 'success':
//         return `${baseClasses} bg-green-100 text-green-800`;
//       case 'error':
//         return `${baseClasses} bg-red-100 text-red-800`;
//       case 'warning':
//         return `${baseClasses} bg-yellow-100 text-yellow-800`;
//       default:
//         return `${baseClasses} bg-gray-100 text-gray-800`;
//     }
//   };

//   const getMethodBadge = (method) => {
//     const baseClasses = "px-2 py-1 rounded text-xs font-mono font-semibold";
//     switch (method) {
//       case 'GET':
//         return `${baseClasses} bg-blue-100 text-blue-800`;
//       case 'POST':
//         return `${baseClasses} bg-green-100 text-green-800`;
//       case 'PUT':
//         return `${baseClasses} bg-yellow-100 text-yellow-800`;
//       case 'DELETE':
//         return `${baseClasses} bg-red-100 text-red-800`;
//       default:
//         return `${baseClasses} bg-gray-100 text-gray-800`;
//     }
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
//       <div className="p-6 border-b border-gray-100">
//         <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
//           <Database className="w-5 h-5 text-blue-600" />
//           Recent API Calls
//         </h2>
//         <p className="text-gray-600 text-sm mt-1">Latest API usage statistics</p>
//       </div>
      
//       <div className="overflow-x-auto">
//         <table className="w-full">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">API Name</th>
//               <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Method</th>
//               <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Endpoint</th>
//               <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Time</th>
//               <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
//               <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Response Time</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-100">
//             {apiCalls.map((call) => (
//               <tr key={call.id} className="hover:bg-gray-50 transition-colors">
//                 <td className="px-6 py-4">
//                   <div className="flex items-center gap-3">
//                     <div className="p-2 bg-blue-100 rounded-lg">
//                       <Zap className="w-4 h-4 text-blue-600" />
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-800">{call.apiName}</p>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="px-6 py-4">
//                   <span className={getMethodBadge(call.method)}>{call.method}</span>
//                 </td>
//                 <td className="px-6 py-4">
//                   <code className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-700 font-mono">
//                     {call.endpoint}
//                   </code>
//                 </td>
//                 <td className="px-6 py-4 text-sm text-gray-600">
//                   {new Date(call.timestamp).toLocaleTimeString('en-US', {
//                     hour: '2-digit',
//                     minute: '2-digit'
//                   })}
//                 </td>
//                 <td className="px-6 py-4">
//                   <div className="flex items-center gap-2">
//                     {getStatusIcon(call.status)}
//                     <span className={getStatusBadge(call.status)}>
//                       {call.status}
//                     </span>
//                   </div>
//                 </td>
//                 <td className="px-6 py-4">
//                   <span className={`font-semibold ${
//                     call.responseTime > 1000 ? 'text-red-600' : 
//                     call.responseTime > 500 ? 'text-yellow-600' : 'text-green-600'
//                   }`}>
//                     {call.responseTime}ms
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// // Main Dashboard Component
// const Dashboard = ({ user, onLogout }) => {
//   const [apiCalls, setApiCalls] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate API fetch
//     const fetchApiCalls = async () => {
//       setLoading(true);
//       // Simulate network delay
//       await new Promise(resolve => setTimeout(resolve, 1000));
//       setApiCalls(mockApiCalls);
//       setLoading(false);
//     };

//     fetchApiCalls();
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
//           <p className="text-gray-600">Loading dashboard...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
//       <div className="container mx-auto px-4 py-8">
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold text-gray-800 mb-2">Developer Dashboard</h1>
//           <p className="text-gray-600">Welcome back, {user.name}! Here's your API usage overview.</p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
//           <div className="lg:col-span-1">
//             <ProfileCard user={user} onLogout={onLogout} />
//           </div>
//           <div className="lg:col-span-2">
//             <StatsCards apiCalls={apiCalls} />
//           </div>
//         </div>

//         <ApiCallsTable apiCalls={apiCalls} />
//       </div>
//     </div>
//   );
// };

// // Main App Component
// const DevboxApp = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);

//   const handleLogin = () => {
//     setUser(mockUser);
//     setIsLoggedIn(true);
//   };

//   const handleLogout = () => {
//     setUser(null);
//     setIsLoggedIn(false);
//   };

//   if (!isLoggedIn) {
//     return <LoginScreen onLogin={handleLogin} />;
//   }

//   return <Dashboard user={user} onLogout={handleLogout} />;
// };

// export default DevboxApp;