const rouetr = require('express').Router();
const roleController = require('../controllers/RoleController');
const zodMiddleware = require('../middleware/zodMiddleware');
const roleValidaitonSchema = require('../validationSchema/RoleValidationSchema');

rouetr.post("/",zodMiddleware(roleValidaitonSchema),roleController.createRole)

module.exports = rouetr;