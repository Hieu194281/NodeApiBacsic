const index = (req, res) => {
  return res.status(200).json({
    message: "Success",
  });
};

module.exports = {
  index,
};
