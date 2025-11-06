// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../hooks/useAuth';

// const Login = () => {
//   const navigate = useNavigate();
//   const { login } = useAuth();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//     setError(''); // Clear error when user types
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       const result = await login(formData.email, formData.password);
      
//       if (result.success) {
//         // Redirect to role-specific dashboard
//         navigate(`/dashboard/${result.user.globalRole}`, { replace: true });
//       } else {
//         setError(result.message || 'Login failed');
//       }
//     } catch (err) {
//       setError('An error occurred during login');
//       console.error('Login error:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
//             Task Manager
//           </h2>
//           <p className="mt-2 text-center text-sm text-gray-600">
//             Sign in to your account
//           </p>
//         </div>

//         <div className="bg-white py-8 px-6 shadow-xl rounded-lg">
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             {error && (
//               <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative">
//                 <span className="block sm:inline">{error}</span>
//               </div>
//             )}

//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email address
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
//                 placeholder="Enter your email"
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 autoComplete="current-password"
//                 required
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
//                 placeholder="Enter your password"
//               />
//             </div>

//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <input
//                   id="remember-me"
//                   name="remember-me"
//                   type="checkbox"
//                   className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
//                 />
//                 <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
//                   Remember me
//                 </label>
//               </div>

//               <div className="text-sm">
//                 <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
//                   Forgot password?
//                 </a>
//               </div>
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:bg-purple-400 disabled:cursor-not-allowed"
//             >
//               {loading ? (
//                 <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
//                 </svg>
//               ) : (
//                 'Sign in'
//               )}
//             </button>
//           </form>

//           <div className="mt-6">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300" />
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white text-gray-500">
//                   Demo Credentials
//                 </span>
//               </div>
//             </div>

//             <div className="mt-4 space-y-2 text-xs text-gray-600">
//               <p><strong>Superadmin:</strong> superadmin@example.com / password123</p>
//               <p><strong>Team Lead:</strong> teamlead@example.com / password123</p>
//               <p><strong>Project Lead:</strong> projectlead@example.com / password123</p>
//               <p><strong>Member:</strong> member@example.com / password123</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;












// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { LogIn } from "lucide-react";

// export default function AnimatedLoginScene() {
//   const [showForm, setShowForm] = useState(false);

//   // Show login form after 1 second
//   useEffect(() => {
//     const timer = setTimeout(() => setShowForm(true), 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="flex min-h-screen overflow-hidden bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-100 relative">

//       {/* LEFT SIDE - Visme iframe, full height, hidden on screens < 1024px */}
//       <div className="w-1/2 flex flex-col justify-center items-center text-white relative overflow-hidden h-screen hidden lg:flex">
//         <div className="w-full h-full overflow-hidden relative">
//           <iframe
//             src="https://forms.visme.co/formsPlayer/g0ov7y0o-login-form-for-db"
//             className="w-full h-full rounded-lg shadow-xl z-10 transform scale-[1.85] origin-center"
//             style={{ border: "none" }}
//             title="Visme Login Form"
//           ></iframe>
//         </div>
//       </div>


//       {/* RIGHT SIDE - LOGIN FORM, full width on smaller screens */}
//       <div className="w-full lg:w-1/2 flex justify-center items-center relative min-h-screen px-4">
//         <AnimatePresence>
//           {showForm && (
//             <motion.div
//               initial={{ opacity: 0, x: 150, scale: 0.95 }}
//               animate={{ opacity: 1, x: 0, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.95 }}
//               transition={{ duration: 1, ease: "easeOut" }}
//               className="bg-gradient-to-br white backdrop-blur-lg p-12 md:p-16 rounded-5xl shadow-3xl w-full max-w-[550px] h-auto relative overflow-hidden flex flex-col justify-center"
//             >
//               {/* Floating Gradient Circles for Depth */}
//               <div className="absolute -top-28 -right-28 w-[400px] h-[400px] bg-gradient-to-br from-white to-transparent rounded-full opacity-40 blur-3xl animate-pulse"></div>
//               <div className="absolute -bottom-32 -left-32 w-[350px] h-[350px] bg-gradient-to-br from-white to-transparent rounded-full opacity-30 blur-2xl animate-pulse"></div>

//               {/* Logo & Welcome Text */}
//               <div className="flex flex-col items-center mb-10 relative z-10">
//                 <motion.img
//                   src="./logo.png"
//                   alt="Company Logo"
//                   className="w-48 mb-6 drop-shadow-lg" // Increased from w-36 to w-48 and mb-5 to mb-6
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ duration: 1, delay: 0.5 }}
//                 />

//                 <motion.h2
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.5 }}
//                   className="text-3xl font-extrabold text-indigo-900 text-center"
//                 >
//                   Welcome Back
//                 </motion.h2>
//                 <p className="text-gray-600 text-center mt-2 text-lg">
//                   Enter your credentials to access your dashboard
//                 </p>
//               </div>

//               {/* Login Form */}
//               <form className="flex flex-col space-y-6 relative z-10">
//                 <div>
//                   <label className="text-sm font-semibold text-gray-700">Username</label>
//                   <input
//                     type="text"
//                     placeholder="Enter your username"
//                     className="w-full mt-2 px-6 py-3 rounded-3xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none shadow-md transition text-lg"
//                   />
//                 </div>

//                 <div>
//                   <label className="text-sm font-semibold text-gray-700">Password</label>
//                   <input
//                     type="password"
//                     placeholder="Enter your password"
//                     className="w-full mt-2 px-6 py-3 rounded-3xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none shadow-md transition text-lg"
//                   />
//                 </div>

//                 <motion.button
//                   type="submit"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.97 }}
//                   className="flex justify-center items-center gap-3 bg-indigo-600 text-white py-4 rounded-3xl shadow-lg hover:bg-indigo-700 transition text-xl font-semibold"
//                 >
//                   <LogIn size={22} /> Login
//                 </motion.button>
//               </form>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//     </div>
//   );
// }




















// company logo thoo unna left side and proper credentional working 

// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../hooks/useAuth';
// import { LogIn } from 'lucide-react';

// const Login = () => {
//   const navigate = useNavigate();
//   const { login } = useAuth();
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setShowForm(true), 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//     setError('');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       const result = await login(formData.email, formData.password);
      
//       if (result.success) {
//         navigate(`/dashboard/${result.user.globalRole}`, { replace: true });
//       } else {
//         setError(result.message || 'Login failed');
//       }
//     } catch (err) {
//       setError('An error occurred during login');
//       console.error('Login error:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex min-h-screen overflow-hidden bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-100 relative">
      
//       {/* LEFT SIDE - Image/Logo Section */}
//       <div className="w-1/2 flex flex-col justify-center items-center text-white relative overflow-hidden h-screen hidden lg:flex">
//         <div className="w-full h-full flex items-center justify-center p-12">
//           <div className="max-w-2xl w-full h-full flex items-center justify-center">
//             <img
//               src="./logo.png"
//               alt="Company Logo"
//               className="max-w-full max-h-full object-contain drop-shadow-2xl animate-logo-in"
//               onError={(e) => {
//                 e.target.style.display = 'none';
//                 e.target.nextElementSibling.style.display = 'flex';
//               }}
//             />
//             {/* Fallback icon if logo doesn't load */}
//             <div className="w-64 h-64 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl animate-logo-in hidden">
//               <svg className="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
//                 <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
//               </svg>
//             </div>
//           </div>
//         </div>
        
//         {/* Floating Gradient Circles */}
//         <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400 to-transparent rounded-full opacity-30 blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400 to-transparent rounded-full opacity-30 blur-3xl animate-pulse"></div>
//       </div>

//       {/* RIGHT SIDE - LOGIN FORM */}
//       <div className="w-full lg:w-1/2 flex justify-center items-center relative h-screen px-4 overflow-hidden">
//         {showForm && (
//           <div 
//             className="bg-white backdrop-blur-lg p-12 md:p-16 rounded-3xl shadow-3xl w-full max-w-[550px] h-auto relative overflow-hidden flex flex-col justify-center animate-slide-in"
//           >
//             {/* Floating Gradient Circles */}
//             <div className="absolute -top-28 -right-28 w-96 h-96 bg-gradient-to-br from-indigo-100 to-transparent rounded-full opacity-40 blur-3xl animate-pulse"></div>
//             <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-br from-purple-100 to-transparent rounded-full opacity-30 blur-2xl animate-pulse"></div>

//             {/* Header */}
//             <div className="flex flex-col items-center mb-10 relative z-10">
//               <h2 className="text-4xl font-extrabold text-indigo-900 text-center animate-fade-down">
//                 Task Manager
//               </h2>
//               <p className="text-gray-600 text-center mt-3 text-lg animate-fade-down" style={{animationDelay: '0.2s'}}>
//                 Sign in to your account
//               </p>
//             </div>

//             {/* Error Message */}
//             {error && (
//               <div className="mb-6 bg-red-50 border-l-4 border-red-500 text-red-700 px-5 py-4 rounded-lg relative z-10 animate-shake">
//                 <p className="font-medium">{error}</p>
//               </div>
//             )}

//             {/* Login Form */}
//             <form onSubmit={handleSubmit} className="flex flex-col space-y-6 relative z-10">
//               <div>
//                 <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
//                 <input
//                   id="email"
//                   type="email"
//                   name="email"
//                   autoComplete="email"
//                   required
//                   placeholder="Enter your email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full mt-2 px-6 py-3 rounded-3xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none shadow-md transition text-lg"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="password" className="text-sm font-semibold text-gray-700">Password</label>
//                 <input
//                   id="password"
//                   type="password"
//                   name="password"
//                   autoComplete="current-password"
//                   required
//                   placeholder="Enter your password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="w-full mt-2 px-6 py-3 rounded-3xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none shadow-md transition text-lg"
//                 />
//               </div>

//               <div className="flex items-center justify-between">
//                 <label className="flex items-center cursor-pointer">
//                   <input
//                     id="remember-me"
//                     type="checkbox"
//                     checked={rememberMe}
//                     onChange={(e) => setRememberMe(e.target.checked)}
//                     className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
//                   />
//                   <span className="ml-2 text-sm text-gray-700">Remember me</span>
//                 </label>
//                 <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition">
//                   Forgot password?
//                 </a>
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="flex justify-center items-center gap-3 bg-indigo-600 text-white py-4 rounded-3xl shadow-lg hover:bg-indigo-700 transition text-xl font-semibold hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
//               >
//                 {loading ? (
//                   <svg className="animate-spin h-6 w-6 text-white" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
//                   </svg>
//                 ) : (
//                   <>
//                     <LogIn size={22} /> Sign in
//                   </>
//                 )}
//               </button>
//             </form>

//             {/* Demo Credentials */}
//             <div className="mt-8 relative z-10">
//               <div className="relative">
//                 <div className="absolute inset-0 flex items-center">
//                   <div className="w-full border-t border-gray-300" />
//                 </div>
//                 <div className="relative flex justify-center text-sm">
//                   <span className="px-3 bg-white text-gray-500 font-medium">
//                     Demo Credentials
//                   </span>
//                 </div>
//               </div>

//               <div className="mt-5 space-y-2 text-xs text-gray-600 bg-gray-50 p-4 rounded-xl">
//                 <p><strong>Superadmin:</strong> superadmin@example.com / password123</p>
//                 <p><strong>Team Lead:</strong> teamlead@example.com / password123</p>
//                 <p><strong>Project Lead:</strong> projectlead@example.com / password123</p>
//                 <p><strong>Member:</strong> member@example.com / password123</p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <style>{`
//         @keyframes slide-in {
//           from {
//             opacity: 0;
//             transform: translateX(150px) scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0) scale(1);
//           }
//         }

//         @keyframes logo-in {
//           from {
//             transform: scale(0.8);
//             opacity: 0;
//           }
//           to {
//             transform: scale(1);
//             opacity: 1;
//           }
//         }

//         @keyframes fade-down {
//           from {
//             opacity: 0;
//             transform: translateY(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes shake {
//           0%, 100% {
//             transform: translateX(0);
//           }
//           25% {
//             transform: translateX(-10px);
//           }
//           75% {
//             transform: translateX(10px);
//           }
//         }

//         .animate-slide-in {
//           animation: slide-in 1s ease-out forwards;
//         }

//         .animate-logo-in {
//           animation: logo-in 1s ease-out 0.5s forwards;
//           opacity: 0;
//         }

//         .animate-fade-down {
//           animation: fade-down 0.8s ease-out forwards;
//           opacity: 0;
//         }

//         .animate-shake {
//           animation: shake 0.5s ease-in-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Login;












// final animation code with that image 

// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../hooks/useAuth';
// import { LogIn } from 'lucide-react';

// const Login = () => {
//   const navigate = useNavigate();
//   const { login } = useAuth();
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setShowForm(true), 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//     setError('');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       const result = await login(formData.email, formData.password);
      
//       if (result.success) {
//         navigate(`/dashboard/${result.user.globalRole}`, { replace: true });
//       } else {
//         setError(result.message || 'Login failed');
//       }
//     } catch (err) {
//       setError('An error occurred during login');
//       console.error('Login error:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex min-h-screen overflow-hidden bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-100 relative">
      
//       {/* LEFT SIDE - Visme iframe */}
//       <div className="w-1/2 flex flex-col justify-center items-center text-white relative overflow-hidden h-screen hidden lg:flex">
//         <div className="w-full h-full overflow-hidden relative">
//           <iframe
//             src="https://forms.visme.co/formsPlayer/g0ov7y0o-login-form-for-db"
//             className="w-full h-full rounded-lg shadow-xl z-10 transform scale-[1.85] origin-center"
//             style={{ border: "none" }}
//             title="Visme Login Form"
//           ></iframe>
//         </div>
//       </div>

//       {/* RIGHT SIDE - LOGIN FORM */}
//       <div className="w-full lg:w-1/2 flex justify-center items-center relative h-screen px-4 overflow-hidden">
//         {showForm && (
//           <div 
//             className="bg-white backdrop-blur-lg p-12 md:p-16 rounded-3xl shadow-3xl w-full max-w-[550px] h-auto relative overflow-hidden flex flex-col justify-center animate-slide-in"
//           >
//             {/* Floating Gradient Circles */}
//             <div className="absolute -top-28 -right-28 w-96 h-96 bg-gradient-to-br from-indigo-100 to-transparent rounded-full opacity-40 blur-3xl animate-pulse"></div>
//             <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-br from-purple-100 to-transparent rounded-full opacity-30 blur-2xl animate-pulse"></div>

//             {/* Logo Header */}
//             <div className="flex flex-col items-center mb-10 relative z-10">
//               <img
//                 src="./logo.png"
//                 alt="Logo"
//                 className="w-48 mb-6 drop-shadow-lg animate-logo-in"
//                 onError={(e) => {
//                   e.target.style.display = 'none';
//                   e.target.nextElementSibling.style.display = 'flex';
//                 }}
//               />
//               {/* Fallback icon if logo doesn't load */}
//               <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg animate-logo-in hidden">
//                 <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
//                   <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
//                 </svg>
//               </div>
              
//               <p className="text-gray-600 text-center mt-2 text-lg animate-fade-down" style={{animationDelay: '0.2s'}}>
//                 Sign in to your account
//               </p>
//             </div>

//             {/* Error Message */}
//             {error && (
//               <div className="mb-6 bg-red-50 border-l-4 border-red-500 text-red-700 px-5 py-4 rounded-lg relative z-10 animate-shake">
//                 <p className="font-medium">{error}</p>
//               </div>
//             )}

//             {/* Login Form */}
//             <form onSubmit={handleSubmit} className="flex flex-col space-y-6 relative z-10">
//               <div>
//                 <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
//                 <input
//                   id="email"
//                   type="email"
//                   name="email"
//                   autoComplete="email"
//                   required
//                   placeholder="Enter your email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full mt-2 px-6 py-3 rounded-3xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none shadow-md transition text-lg"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="password" className="text-sm font-semibold text-gray-700">Password</label>
//                 <input
//                   id="password"
//                   type="password"
//                   name="password"
//                   autoComplete="current-password"
//                   required
//                   placeholder="Enter your password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="w-full mt-2 px-6 py-3 rounded-3xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none shadow-md transition text-lg"
//                 />
//               </div>

//               <div className="flex items-center justify-between">
//                 <label className="flex items-center cursor-pointer">
//                   <input
//                     id="remember-me"
//                     type="checkbox"
//                     checked={rememberMe}
//                     onChange={(e) => setRememberMe(e.target.checked)}
//                     className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
//                   />
//                   <span className="ml-2 text-sm text-gray-700">Remember me</span>
//                 </label>
//                 <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition">
//                   Forgot password?
//                 </a>
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="flex justify-center items-center gap-3 bg-indigo-600 text-white py-4 rounded-3xl shadow-lg hover:bg-indigo-700 transition text-xl font-semibold hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
//               >
//                 {loading ? (
//                   <svg className="animate-spin h-6 w-6 text-white" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
//                   </svg>
//                 ) : (
//                   <>
//                     <LogIn size={22} /> Sign in
//                   </>
//                 )}
//               </button>
//             </form>
//           </div>
//         )}
//       </div>

//       <style>{`
//         @keyframes slide-in {
//           from {
//             opacity: 0;
//             transform: translateX(150px) scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0) scale(1);
//           }
//         }

//         @keyframes logo-in {
//           from {
//             transform: scale(0.8);
//             opacity: 0;
//           }
//           to {
//             transform: scale(1);
//             opacity: 1;
//           }
//         }

//         @keyframes fade-down {
//           from {
//             opacity: 0;
//             transform: translateY(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes shake {
//           0%, 100% {
//             transform: translateX(0);
//           }
//           25% {
//             transform: translateX(-10px);
//           }
//           75% {
//             transform: translateX(10px);
//           }
//         }

//         .animate-slide-in {
//           animation: slide-in 1s ease-out forwards;
//         }

//         .animate-logo-in {
//           animation: logo-in 1s ease-out 0.5s forwards;
//           opacity: 0;
//         }

//         .animate-fade-down {
//           animation: fade-down 0.8s ease-out forwards;
//           opacity: 0;
//         }

//         .animate-shake {
//           animation: shake 0.5s ease-in-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Login;























// still more animation 

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { LogIn } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowForm(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await login(formData.email, formData.password);
      
      if (result.success) {
        navigate(`/dashboard/${result.user.globalRole}`, { replace: true });
      } else {
        setError(result.message || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred during login');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen overflow-hidden bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-100 relative">
      
      {/* LEFT SIDE - Visme iframe */}
      <div className="w-1/2 flex flex-col justify-center items-center text-white relative overflow-hidden h-screen hidden lg:flex">
        <div className="w-full h-full overflow-hidden relative">
          <iframe
            src="https://forms.visme.co/formsPlayer/g0ov7y0o-login-form-for-db"
            className="w-full h-full rounded-lg shadow-xl z-10 transform scale-[1.85] origin-center"
            style={{ border: "none" }}
            title="Visme Login Form"
          ></iframe>
        </div>
      </div>

      {/* RIGHT SIDE - LOGIN FORM */}
      <div className="w-full lg:w-1/2 flex justify-center items-center relative h-screen px-4 overflow-hidden">
        {/* Animated Particles Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle absolute rounded-full bg-gradient-to-br from-indigo-300 to-purple-300 opacity-20"
              style={{
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`
              }}
            />
          ))}
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full blur-3xl opacity-30 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-indigo-300 to-purple-300 rounded-full blur-2xl opacity-20 animate-float-slow"></div>

        {showForm && (
          <div 
            className="bg-white backdrop-blur-lg p-12 md:p-16 rounded-3xl shadow-3xl w-full max-w-[550px] h-auto relative overflow-hidden flex flex-col justify-center animate-slide-in"
          >
            {/* Floating Gradient Circles Inside Card */}
            <div className="absolute -top-28 -right-28 w-96 h-96 bg-gradient-to-br from-indigo-100 to-transparent rounded-full opacity-40 blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-br from-purple-100 to-transparent rounded-full opacity-30 blur-2xl animate-pulse"></div>

            {/* Sparkles */}
            <div className="absolute top-10 right-10 w-2 h-2 bg-indigo-400 rounded-full animate-sparkle"></div>
            <div className="absolute top-20 right-32 w-1.5 h-1.5 bg-purple-400 rounded-full animate-sparkle-delayed"></div>
            <div className="absolute bottom-24 left-16 w-2 h-2 bg-blue-400 rounded-full animate-sparkle-slow"></div>

            {/* Logo Header */}
            <div className="flex flex-col items-center mb-10 relative z-10">
              <img
                src="./logo.png"
                alt="Logo"
                className="w-48 mb-6 drop-shadow-lg animate-logo-in"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              {/* Fallback icon if logo doesn't load */}
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg animate-logo-in hidden">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              
              <p className="text-gray-600 text-center mt-2 text-lg animate-fade-down" style={{animationDelay: '0.2s'}}>
                Sign in to your account
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 bg-red-50 border-l-4 border-red-500 text-red-700 px-5 py-4 rounded-lg relative z-10 animate-shake">
                <p className="font-medium">{error}</p>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="flex flex-col space-y-6 relative z-10">
              <div>
                <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-2 px-6 py-3 rounded-3xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none shadow-md transition-all duration-300 text-lg hover:shadow-lg focus:shadow-xl"
                />
              </div>

              <div>
                <label htmlFor="password" className="text-sm font-semibold text-gray-700">Password</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  required
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full mt-2 px-6 py-3 rounded-3xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none shadow-md transition-all duration-300 text-lg hover:shadow-lg focus:shadow-xl"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center cursor-pointer group">
                  <input
                    id="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 transition-transform group-hover:scale-110"
                  />
                  <span className="ml-2 text-sm text-gray-700 transition-colors group-hover:text-indigo-600">Remember me</span>
                </label>
                <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-all hover:underline">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex justify-center items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 text-xl font-semibold hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 hover:from-indigo-700 hover:to-purple-700"
              >
                {loading ? (
                  <svg className="animate-spin h-6 w-6 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                ) : (
                  <>
                    <LogIn size={22} /> Sign in
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(150px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes logo-in {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes fade-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shake {
          0%, 100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-10px);
          }
          75% {
            transform: translateX(10px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-25px, 25px) scale(1.05);
          }
          66% {
            transform: translate(20px, -20px) scale(0.95);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(15px, 15px) rotate(180deg);
          }
        }

        @keyframes particle-float {
          0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100vh) translateX(20px) scale(0);
            opacity: 0;
          }
        }

        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-slide-in {
          animation: slide-in 1s ease-out forwards;
        }

        .animate-logo-in {
          animation: logo-in 1s ease-out 0.5s forwards;
          opacity: 0;
        }

        .animate-fade-down {
          animation: fade-down 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }

        .particle {
          animation: particle-float linear infinite;
        }

        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }

        .animate-sparkle-delayed {
          animation: sparkle 2s ease-in-out infinite 0.7s;
        }

        .animate-sparkle-slow {
          animation: sparkle 3s ease-in-out infinite 1.5s;
        }
      `}</style>
    </div>
  );
};

export default Login;