const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');

router.post('/', UserController.createUser);
router.put('/:id', UserController.editUser);
router.get('/', UserController.listUsers);
router.delete('/:id', UserController.deleteUser);

module.exports = router;
