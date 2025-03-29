const zod = require("zod");

const userValidationSchema = zod.object({
  name: zod.string().nonempty(),
  email: zod.string().email(),
  password: zod.string().nonempty(),
  role: zod.string().nonempty(),
});
module.exports = userValidationSchema;
