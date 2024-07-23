export const isMobile = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /android|iphone|ipad|ipod|opera mini|iemobile|mobile/.test(userAgent);
};
