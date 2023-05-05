const express = require('express');
const { check } = require('express-validator');

const useresControllers = require('../controllers/users-controllers');

const router = express.Router();

router.get('/', useresControllers.getUsers);

router.post(
    '/signup', 
    [
        check('name').not().isEmpty(),
        check('email').normalizeEmail().isEmail(),
        check('password').isLength({ min: 6})
    ],
    useresControllers.signup
);

router.post('/login', useresControllers.login);

module.exports = router;