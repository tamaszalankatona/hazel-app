export const API_ENDPOINTS = {
  household: {
    prefix: '/household',
    active: '/active',
    create: '/create',
  },

  auth: {
    prefix: '/auth',
    login: '/login',
    signUp: '/sign-up',
    logout: '/logout',
    me: '/me',
  },
} as const;
