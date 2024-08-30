const checkJsonContentType = (req, res, next) => {
  if (req.headers["content-type"] !== "application/json") {
    return res
      .status(400)
      .json({ error: "Invalid Content-Type. Expected 'application/json'" });
  }
  next();
};

module.exports = {
  checkJsonContentType,
};
