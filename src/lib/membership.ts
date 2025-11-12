export const getMembership = () => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('membership') === 'active';
};

export const setMembership = () => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('membership', 'active');
};