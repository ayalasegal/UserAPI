// userRoutes.js
const express = require('express');
const userController = require('./UserController');

const router = express.Router();

router.get('/users', userController.getAllUsers);
router.get('/users/id/:id', userController.getUserById);
router.get('/users/name/:name', userController.getUserByName);
router.get('/users/mail/:email', userController.getUserByMail);
router.get('/users/phone/:phone', userController.getUserByPhone);
router.post('/users', userController.addNewUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
