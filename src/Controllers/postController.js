exports.create = async (req, res) => {
  res.status(200),
    json({
      status: "success",
      data: "post created successfully",
    });
};
exports.read = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "post read successfully",
  });
};
exports.delete = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "post deleted successfully",
  });
};
exports.update = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "post updated successfully",
  });
};
