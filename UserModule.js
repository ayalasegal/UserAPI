class User {
  constructor(name, email, phoneNumber) {
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }
  
  validate() {
    if (!this.name || !this.email || !this.phoneNumber) {
      throw new Error("All fields are required");
    }
    if (!this.email.includes("@") || this.email.includes(" ")) {
      throw new Error("Invalid email format");
    }
  }
}

const users = [];

function createUser(name, email, phoneNumber) {
  const user = new User(name, email, phoneNumber);
  user.validate();
  users.push(user);
  return user;
}

function updateUser(userId, name, email, phoneNumber) {
  const user = users.find((user) => user.id === userId);
  if (!user) {
    throw new Error("User not found");
  }
  user.name = name;
  user.email = email;
  user.phoneNumber = phoneNumber;
  user.validate();
  return user;
}

function deleteUser(userId) {
  const index = users.findIndex((user) => user.id === userId);
  if (index === -1) {
    throw new Error("User not found");
  }
  users.splice(index, 1);
}

function getUserById(userId) {
  const user = users.find((user) => user.id === userId);
  if (!user) {
    throw new Error("User not found");
  }
  return user;
}

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUserById,
};
