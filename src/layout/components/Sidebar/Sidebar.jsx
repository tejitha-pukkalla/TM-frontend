// // src/layouts/components/Sidebar/Sidebar.jsx
// import { NavLink } from 'react-router-dom';
// import { useAuth } from '../../../hooks/useAuth';
// import { ROLES } from '../../../config/constants';

// const Sidebar = ({ isOpen, toggleSidebar }) => {
//   const { user } = useAuth();

//   // Navigation items based on role
//   const getNavItems = () => {
//     const commonItems = [
//       {
//         name: 'Dashboard',
//         path: `/dashboard/${user?.globalRole}`,
//         icon: (
//           <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//           </svg>
//         )
//       }
//     ];

//     const roleSpecificItems = {
//       [ROLES.SUPERADMIN]: [
//         { name: 'Users', path: '/users', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg> },
//         { name: 'Projects', path: '/projects', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg> },
//         { name: 'Tasks', path: '/tasks', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg> },
//         { name: 'Approvals', path: '/approvals', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> }
//       ],
//       [ROLES.TEAMLEAD]: [
//         { name: 'Users', path: '/users', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg> },
//         { name: 'Projects', path: '/projects', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg> },
//         { name: 'Tasks', path: '/tasks', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg> },
//         { name: 'Approvals', path: '/approvals', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> }
//       ],
//       [ROLES.PROJECTLEAD]: [
//         { name: 'My Projects', path: '/projects', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg> },
//         { name: 'Tasks', path: '/tasks', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg> }
//       ],
//       [ROLES.MEMBER]: [
//         { name: 'My Tasks', path: '/my-tasks', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg> },
//         { name: 'Time Tracking', path: '/time-tracking', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> }
//       ]
//     };

//     return [...commonItems, ...(roleSpecificItems[user?.globalRole] || [])];
//   };

//   return (
//     <>
//       {/* Mobile Overlay */}
//       {isOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
//           onClick={toggleSidebar}
//         />
//       )}

//       {/* Sidebar */}
//       <aside className={`
//         fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-gray-200
//         transform transition-transform duration-300 ease-in-out
//         lg:translate-x-0 lg:static
//         ${isOpen ? 'translate-x-0' : '-translate-x-full'}
//       `}>
//         <div className="flex flex-col h-full">
//           {/* Logo */}
//           <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
//             <h1 className="text-xl font-bold text-purple-600">Task Manager</h1>
//             <button
//               onClick={toggleSidebar}
//               className="lg:hidden text-gray-500 hover:text-gray-700"
//             >
//               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>

//           {/* Navigation */}
//           <nav className="flex-1 px-4 py-6 overflow-y-auto">
//             <ul className="space-y-2">
//               {getNavItems().map((item) => (
//                 <li key={item.path}>
//                   <NavLink
//                     to={item.path}
//                     className={({ isActive }) =>
//                       `flex items-center px-4 py-3 rounded-lg transition-colors ${
//                         isActive
//                           ? 'bg-purple-50 text-purple-600 font-semibold'
//                           : 'text-gray-700 hover:bg-gray-100'
//                       }`
//                     }
//                   >
//                     {item.icon}
//                     <span className="ml-3">{item.name}</span>
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           {/* User Info */}
//           <div className="px-6 py-4 border-t border-gray-200">
//             <div className="flex items-center">
//               <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-semibold">
//                 {user?.name?.charAt(0).toUpperCase()}
//               </div>
//               <div className="ml-3 flex-1">
//                 <p className="text-sm font-semibold text-gray-900">{user?.name}</p>
//                 <p className="text-xs text-gray-500 capitalize">{user?.globalRole}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// };

// export default Sidebar;




// src/layouts/components/Sidebar/Sidebar.jsx
// import { NavLink } from 'react-router-dom';
// import { useAuth } from '../../../hooks/useAuth';
// import { ROLES } from '../../../config/constants';

// const Sidebar = ({ isOpen, toggleSidebar }) => {
//   const { user } = useAuth();

//   // Navigation items based on role
//   const getNavItems = () => {
//     const commonItems = [
//       {
//         name: 'Dashboard',
//         path: `/dashboard/${user?.globalRole}`,
//         icon: (
//           <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//           </svg>
//         )
//       }
//     ];

//     const roleSpecificItems = {
//       [ROLES.SUPERADMIN]: [
//         { name: 'Users', path: '/users', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg> },
//         { name: 'Projects', path: '/projects', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg> },
//         { name: 'Tasks', path: '/tasks', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg> },
//         { name: 'Approvals', path: '/approvals', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> }
//       ],
//       [ROLES.TEAMLEAD]: [
//         { name: 'Users', path: '/users', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg> },
//         { name: 'Projects', path: '/projects', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg> },
//         { name: 'Tasks', path: '/tasks', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg> },
//         { name: 'Approvals', path: '/approvals', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> }
//       ],
//       [ROLES.PROJECTLEAD]: [
//         { name: 'My Projects', path: '/projects', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg> },
//         { name: 'Tasks', path: '/tasks', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg> }
//       ],
//       [ROLES.MEMBER]: [
//         { name: 'My Tasks', path: '/my-tasks', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg> },
//         { name: 'Time Tracking', path: '/time-tracking', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> }
//       ]
//     };

//     return [...commonItems, ...(roleSpecificItems[user?.globalRole] || [])];
//   };

//   return (
//     <>
//       {/* Mobile Overlay */}
//       {isOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
//           onClick={toggleSidebar}
//         />
//       )}

//       {/* Sidebar */}
//       <aside className={`
//         fixed top-0 left-0 z-50 h-screen w-64 bg-white border-r border-gray-200
//         transform transition-transform duration-300 ease-in-out
//         lg:translate-x-0 lg:static
//         ${isOpen ? 'translate-x-0' : '-translate-x-full'}
//       `}>
//         <div className="flex flex-col h-full">
//           {/* Logo - Fixed at top */}
//           <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 flex-shrink-0">
//             {/* <h1 className="text-xl font-bold text-emerald-600">DESIGN BLOCKS </h1> */}
//             <h1 className="text-xl font-bold text-blue-900">
//   DESIGN <span className="text-yellow-400">BLOCKS</span>
// </h1>
//             <button
//               onClick={toggleSidebar}
//               className="lg:hidden text-gray-500 hover:text-gray-700"
//             >
//               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>

//           {/* Navigation - Scrollable middle section */}
//           <nav className="flex-1 px-4 py-6 overflow-y-auto">
//             <ul className="space-y-2">
//               {getNavItems().map((item) => (
//                 <li key={item.path}>
//                   <NavLink
//                     to={item.path}
//                     className={({ isActive }) =>
//                       `flex items-center px-4 py-3 rounded-lg transition-colors ${
//                         isActive
//                           ? 'bg-purple-50 text-purple-600 font-semibold'
//                           : 'text-gray-700 hover:bg-gray-100'
//                       }`
//                     }
//                   >
//                     {item.icon}
//                     <span className="ml-3">{item.name}</span>
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           {/* User Info Footer - Fixed at bottom */}
//           <div className="px-6 py-4 border-t border-gray-200 flex-shrink-0 bg-white">
//             <div className="flex items-center">
//               <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-semibold">
//                 {user?.name?.charAt(0).toUpperCase()}
//               </div>
//               <div className="ml-3 flex-1">
//                 <p className="text-sm font-semibold text-gray-900">{user?.name}</p>
//                 <p className="text-xs text-gray-500 capitalize">{user?.globalRole}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// };

// export default Sidebar;




// src/layouts/components/Sidebar/Sidebar.jsx
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { ROLES } from '../../../config/constants';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { user } = useAuth();

  // Navigation items based on role
  const getNavItems = () => {
    const commonItems = [
      {
        name: 'Dashboard',
        path: `/dashboard/${user?.globalRole}`,
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        )
      }
    ];

    const roleSpecificItems = {
      [ROLES.SUPERADMIN]: [
        { 
          name: 'Users', 
          path: '/users', 
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )
        },
        { 
          name: 'Projects', 
          path: '/projects', 
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
          )
        },
        { 
          name: 'Tasks', 
          path: '/tasks', 
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          )
        },
        { 
          name: 'Approvals', 
          path: '/approvals', 
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        }
      ],
      
      [ROLES.TEAMLEAD]: [
        { 
          name: 'Users', 
          path: '/users', 
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )
        },
        { 
          name: 'Projects', 
          path: '/projects', 
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
          )
        },
        { 
          name: 'Tasks', 
          path: '/tasks', 
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          )
        },
        // ✅ NEW - My Tasks for Team Lead
        { 
          name: 'My Tasks', 
          path: '/my-tasks', 
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          )
        },
        { 
          name: 'Approvals', 
          path: '/approvals', 
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        },
        // ✅ NEW - Time Tracking for Team Lead
        { 
          name: 'Time Tracking', 
          path: '/time-tracking', 
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        }
      ],
      
      [ROLES.PROJECTLEAD]: [
        { 
          name: 'My Projects', 
          path: '/projects', 
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
          )
        },
        { 
          name: 'Tasks', 
          path: '/tasks', 
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          )
        },
        // ✅ NEW - My Tasks for Project Lead
        { 
          name: 'My Tasks', 
          path: '/my-tasks', 
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          )
        },
        // ✅ NEW - Time Tracking for Project Lead
        { 
          name: 'Time Tracking', 
          path: '/time-tracking', 
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        }
      ],
      
      [ROLES.MEMBER]: [
        { 
          name: 'My Tasks', 
          path: '/my-tasks', 
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          )
        },
        { 
          name: 'Time Tracking', 
          path: '/time-tracking', 
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        }
      ]
    };

    return [...commonItems, ...(roleSpecificItems[user?.globalRole] || [])];
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-50 h-screen w-64 bg-white border-r border-gray-200
        transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo - Fixed at top */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 flex-shrink-0">
            <h1 className="text-xl font-bold text-blue-900">
              DESIGN <span className="text-yellow-400">BLOCKS</span>
            </h1>
            <button
              onClick={toggleSidebar}
              className="lg:hidden text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation - Scrollable middle section */}
          <nav className="flex-1 px-4 py-6 overflow-y-auto">
            <ul className="space-y-2">
              {getNavItems().map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center px-4 py-3 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-purple-50 text-purple-600 font-semibold'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`
                    }
                  >
                    {item.icon}
                    <span className="ml-3">{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* User Info Footer - Fixed at bottom */}
          <div className="px-6 py-4 border-t border-gray-200 flex-shrink-0 bg-white">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-semibold">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-semibold text-gray-900">{user?.name}</p>
                <p className="text-xs text-gray-500 capitalize">{user?.globalRole}</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;