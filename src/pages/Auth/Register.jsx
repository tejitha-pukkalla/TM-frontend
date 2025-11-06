import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../services/auth.service';
import { useAuth } from '../../hooks/useAuth';
import { ROLES } from '../../config/constants';

const Register = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    globalRole: 'member',
    department: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Determine which roles current user can create
  const availableRoles = () => {
    if (user?.globalRole === ROLES.SUPERADMIN) {
      return [
        { value: 'superadmin', label: 'Superadmin' },
        { value: 'teamlead', label: 'Team Lead' },
        { value: 'projectlead', label: 'Project Lead' },
        { value: 'member', label: 'Member' }
      ];
    } else if (user?.globalRole === ROLES.TEAMLEAD) {
      return [
        { value: 'projectlead', label: 'Project Lead' },
        { value: 'member', label: 'Member' }
      ];
    }
    return [];
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    setApiError('');
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.globalRole) {
      newErrors.globalRole = 'Role is required';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setApiError('');
    setSuccessMessage('');

    try {
      const { confirmPassword, ...userData } = formData;
      
      const response = await authService.register(userData);

      if (response.success) {
        setSuccessMessage(`User ${userData.name} created successfully!`);
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          globalRole: 'member',
          department: '',
          phone: ''
        });
        setTimeout(() => {
          navigate('/users');
        }, 2000);
      }
    } catch (error) {
      setApiError(
        error.response?.data?.message || 
        'Failed to create user. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Create New User
            </h1>
            <p className="text-gray-600">
              Add a new user to the system
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Success Message */}
            {successMessage && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {successMessage}
                </div>
              </div>
            )}

            {/* Error Message */}
            {apiError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {apiError}
              </div>
            )}

            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                    errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Enter full name"
                  disabled={loading}
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                    errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Enter email"
                  disabled={loading}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>
            </div>

            {/* Password Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                    errors.password ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Minimum 6 characters"
                  disabled={loading}
                />
                {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                    errors.confirmPassword ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Re-enter password"
                  disabled={loading}
                />
                {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
              </div>
            </div>

            {/* Role and Department Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Role <span className="text-red-500">*</span>
                </label>
                <select
                  name="globalRole"
                  value={formData.globalRole}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                    errors.globalRole ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                  disabled={loading}
                >
                  <option value="">Select Role</option>
                  {availableRoles().map(role => (
                    <option key={role.value} value={role.value}>
                      {role.label}
                    </option>
                  ))}
                </select>
                {errors.globalRole && <p className="mt-1 text-sm text-red-600">{errors.globalRole}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Department
                </label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="e.g., Development, Design"
                  disabled={loading}
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter phone number"
                disabled={loading}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={() => navigate('/users')}
                disabled={loading}
                className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className={`flex-1 px-6 py-3 rounded-lg font-semibold text-white transition ${
                  loading
                    ? 'bg-purple-400 cursor-not-allowed'
                    : 'bg-purple-600 hover:bg-purple-700'
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Creating...
                  </span>
                ) : (
                  'Create User'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;