import api from './api';

export const profileService = {
  // Get own profile
  getProfile: async () => {
    try {
      const response = await api.get('/profile');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Update own profile (limited fields)
  updateProfile: async (profileData) => {
    try {
      const response = await api.put('/profile', profileData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Change own password
  changePassword: async (passwordData) => {
    try {
      const response = await api.put('/profile/password', passwordData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Upload profile picture
  uploadProfilePicture: async (profilePic) => {
    try {
      const response = await api.post('/profile/upload-picture', { profilePic });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};