const env = process.env.NODE_ENV;

// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  const error = env === 'production' ? 'Internal server error' : err.message || err;
  return res.status(500).json({ error });
};
