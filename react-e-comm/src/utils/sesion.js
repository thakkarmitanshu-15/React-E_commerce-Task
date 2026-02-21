const SESSION_KEY = "session";

export const getSession = () => {
  return JSON.parse(localStorage.getItem(SESSION_KEY));
};

export const setSession = (user, duration) => {
  const session = {
    user,
    expiry: Date.now() + duration,
  };

  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
};

export const clearSession = () => {
  localStorage.removeItem(SESSION_KEY);
};

export const getRemainingTime = () => {
  const session = getSession();
  if (!session) return 0;

  const remaining = session.expiry - Date.now();
  return remaining > 0 ? remaining : 0;
};

export const isSessionValid = () => {
  const session = getSession();
  return session && Date.now() < session.expiry;
};