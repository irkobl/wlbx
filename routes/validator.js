const validator = require('express-validator');
exports.verification = [
    validator.body('password').notEmpty().withMessage('Password must not be empty'),
    validator.body('password').isLength({ min: 5 }).withMessage('Password must be at least five characters long')
]