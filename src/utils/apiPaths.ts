export const BASE_URL = 'http://127.0.0.1:8000/api';

// utils/apiPaths.js
export const API_PATHS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    GET_USER_INFO: '/auth/me',
  },
  DASHBOARD: {
    GET_DATA: '/dashboard/data',
  },
  INCOME: {
    STORE_INCOME: '/income',
    GET_ALL_INCOME: '/income',
    DOWNLOAD_INCOME: (userId: number) => BASE_URL + `/income/${userId}/download`,
    DELETE_INCOME: (incomeId: number) => `/income/${incomeId}`,
  },
  EXPENSE: {
    STORE_EXPENSE: '/expense',
    GET_ALL_EXPENSE: '/expense',
    DOWNLOAD_EXPENSE: (userId: number) => BASE_URL + `/expense/${userId}/download`,
    DELETE_EXPENSE: (expenseId: number) => `/expense/${expenseId}`,
  },
};
