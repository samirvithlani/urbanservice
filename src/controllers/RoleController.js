const roleModel = require("../models/RoleModel");

const createRole = async (req, res) => {
  try {
    const savedRole = await roleModel.create(req.body);
    res.status(201).json({
      data: savedRole,
      message: "Role created successfully",
    });
  } catch (err) {
    res.status(400).json({
      err: err,
    });
  }
};
module.exports = {
    createRole,
}
