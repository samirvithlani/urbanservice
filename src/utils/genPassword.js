const bcrypt = require("bcrypt");

const createPassword = (password) => {
  const hash = bcrypt.hashSync(password, 10);
  return hash;
};

const comparePassword = (password, hash) => bcrypt.compareSync(password, hash);

module.exports = { createPassword, comparePassword };
