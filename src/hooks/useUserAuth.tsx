import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext, UserType } from '../context/userContext';

import { API_PATHS } from '../utils/apiPaths';
import axiosInstance from '../utils/axiosInstance';
import { isAxiosError } from 'axios';

export const useUserAuth = () => {
  const { user, updateUser, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) return;

    let isMounted = true;

    const fetchUserInro = async () => {
      try {
        const response = await axiosInstance.get<UserType>(API_PATHS.AUTH.GET_USER_INFO);

        if (isMounted && response.data && updateUser) {
          updateUser(response.data);
        }
      } catch (error) {
        console.error('Failed to fetch user info:', error);
        if (isMounted) {
          if (clearUser) clearUser();
          navigate('/login');
        }
      }
    }

    fetchUserInro();

    return () => {
      isMounted = false;
    };
  }, [updateUser, clearUser, navigate]);
};
