exports.create = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "admin created successfully",
  });
};
exports.read = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "admin read successfully",
  });
};
exports.delete = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "admin deleted successfully",
  });
};
exports.update = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "admin updated successfully",
  });
};
