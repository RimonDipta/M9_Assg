exports.create = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "subAdmin created successfully",
  });
};
exports.read = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "subAdmin read successfully",
  });
};
exports.delete = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "subAdmin deleted successfully",
  });
};
exports.update = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "subAdmin updated successfully",
  });
};
