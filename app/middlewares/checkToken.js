const { TOKEN } = process.env;

const checkToken = (req, res, next) => {
  const token = req.headers['x-access-token'] || req.headers.authorization || req.headers.Authorization;

  if (!token || token !== TOKEN) {
    return res.status(401).json({
      error: 'Not allowed',
    });
  }
  return next();
};

module.exports = checkToken;
