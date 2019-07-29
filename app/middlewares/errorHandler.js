const env = process.env.NODE_ENV;

module.exports = (err, req, res) => {
  const error = env === 'production' ? 'Internal server error' : err.message || err;
  return res.status(500).json({ error });
};
