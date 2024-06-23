export default cachedEventHandler((event) => {
  return Date.now();
}, {maxAge: 60 * 5}); // 5 minutes
