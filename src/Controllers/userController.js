exports.create = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "user creaated successfullly",
  });
};
exports.read = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "user read successfullly",
  });
};
exports.delete = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "user deleted successfullly",
  });
};
exports.update = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: "user updated successfullly",
  });
};
