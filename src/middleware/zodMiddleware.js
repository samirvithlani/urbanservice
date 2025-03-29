const validationSchema = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (err) {
    res.status(400).json({
      err: err,
    });
  }
};
module.exports = validationSchema;