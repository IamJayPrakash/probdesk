export const isEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};