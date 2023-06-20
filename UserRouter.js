// userRoutes.js
const express = require('express');
const userController = require('./UserController');

const router = express.Router();

router.get('/users', userController.getAllUsers);
router.get('/users/:userId', userController.getUserById);
router.get('/users/name/:userName', userController.getUserByName);
router.get('/users/mail/:userMail', userController.getUserByMail);
router.get('/employees/phone/:employeePhone', userController.getEmployeeByPhone);
router.post('/users', userController.addNewUser);
router.put('/users/:userId', userController.updateUser);
router.delete('/users/:userId', userController.deleteUser);

module.exports = router;
