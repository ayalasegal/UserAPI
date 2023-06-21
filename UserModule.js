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

function generateUniqueId() {
  return uuidv4();
}

function isDuplicateId(newId) {
  return users.some((user) => user.id === newId);
}

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

function getUsers() {
  return users;
}

function updateUser(id, name, email, phoneNumber, birthDate) {
  let user = users.find((u) => u.id === Number(id));
  if (!user) {
    throw new Error('User not found');
  }
  user = new User(id, name, email, phoneNumber, new Hebcal.HDate(new Date(birthDate)));
  user.validate();
  return user;
}

function deleteUser(userId) {
  const index = users.findIndex((user) => user.id === Number(userId));
  if (index === -1) {
    throw new Error('User not found');
  }
  users.splice(index, 1);
  return index;
}

function getUserById(userId) {
  const user = users.find((us) => us.id === Number(userId));
  if (!user) {
    throw new Error('User not found');
  }
  return user;
}

function getUserByName(name) {
  const user = users.find((u) => u.name === name);
  if (!user) {
    throw new Error('User not found');
  }
  return user;
}

function getUserByPhone(phone) {
  const user = users.find((u) => u.phoneNumber === Number(phone));
  if (!user) {
    throw new Error('User not found');
  }
  return user;
}

function getUserByMail(mail) {
  const user = users.find((u) => u.email === mail);
  if (!user) {
    throw new Error('User not found');
  }
  return user;
}

function getUserByBirthDate(birthDate) {
  const user = users.find((u) => u.birthDate === new Hebcal.HDate(new Date(birthDate)));
  if (!user) {
    throw new Error('User not found');
  }
  return user;
}

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
