const zod = require('zod');

const roleValidaitonSchema = zod.object({
    name: zod.string().nonempty(),
    description: zod.string().optional()
})
module.exports = roleValidaitonSchema;