/** This page is designed to showcase and provide functionality
    for managing user features and data using CRUD operations.
    It offers a user-friendly interface that enables users 
    to create, read, update, and delete their information conveniently.
 */

const Hebcal = require('hebcal');
const libphonenumber = require('google-libphonenumber');
const { v4: uuidv4 } = require('uuid');

const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();

class User {
  constructor(id, name, email, phoneNumber, birthDate) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.birthDate = birthDate;
  }

//Validates the required user properties
  validate() {
    if (!this.name || !this.email || !this.phoneNumber) {
      throw new Error('All fields are required');
    }

    if (!this.email.includes('@') || this.email.includes(' ')) {
      throw new Error('Invalid email format');
    }

    if (!phoneUtil.isValidNumberForRegion(phoneUtil.parse(this.phoneNumber, 'IL'), 'IL')) {
      throw new Error('The phone number is invalid');
    }
  }
}

const users = [];

//Generates a unique ID using the uuid package
function generateUniqueId() {
  return uuidv4();
}

//Checks if the new user ID is already present in the array
function isDuplicateId(newId) {
  return users.some((user) => user.id === newId);
}

//Creates a new user with the provided parameters and performs validations
function createUser(name, email, phoneNumber, gregorianDate) {
  let newId;
  do {
    newId = generateUniqueId();
  } while (isDuplicateId(newId));
  const user = new User(newId, name, email, phoneNumber, new Hebcal.HDate(new Date(gregorianDate)));
  user.validate();
  users.push(user);
  return user;
}

//Returns all the Users
function getUsers() {
  return users;
}

//Updates a user with the provided parameters and performs validations
function updateUser(id, name, email, phoneNumber, birthDate) {
  let user = users.find((u) => u.id === Number(id));
  if (!user) {
    throw new Error('User not found');
  }
  user = new User(id, name, email, phoneNumber, new Hebcal.HDate(new Date(birthDate)));
  user.validate();
  return user;
}

//Deletes a user with the given ID if it exists
function deleteUser(userId) {
  const index = users.findIndex((user) => user.id === Number(userId));
  if (index === -1) {
    throw new Error('User not found');
  }
  users.splice(index, 1);
  return index;
}

//Returns a user with the given ID if it exists
function getUserById(userId) {
  const user = users.find((us) => us.id === Number(userId));
  if (!user) {
    throw new Error('User not found');
  }
  return user;
}

//Returns a user with the given name if it exists
function getUserByName(name) {
  const user = users.find((u) => u.name === name);
  if (!user) {
    throw new Error('User not found');
  }
  return user;
}

//Returns a user with the given phoneNumber if it exists
function getUserByPhone(phone) {
  const user = users.find((u) => u.phoneNumber === Number(phone));
  if (!user) {
    throw new Error('User not found');
  }
  return user;
}

//Returns a user with the given email if it exists
function getUserByMail(mail) {
  const user = users.find((u) => u.email === mail);
  if (!user) {
    throw new Error('User not found');
  }
  return user;
}

//Returns a user with the given birthDate if it exists
function getUserByBirthDate(birthDate) {
  const user = users.find((u) => u.birthDate === new Hebcal.HDate(new Date(birthDate)));
  if (!user) {
    throw new Error('User not found');
  }
  return user;
}

//Export all functions from the module
module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  getUserByBirthDate,
  getUserByName,
  getUserByPhone,
  getUserByMail,
  getUsers,
};

