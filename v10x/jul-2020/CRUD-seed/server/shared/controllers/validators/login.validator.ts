export const loginValidator = (req, res, next) => {
  console.log('validate user is logged in');
  next();
};
