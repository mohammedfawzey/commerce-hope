module.exports = () => {
  const random = Math.random().toString().substring(2);
  const date = Date.now();
  return Number(random).toString().substring(0, 6);
};
