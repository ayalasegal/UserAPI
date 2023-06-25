# User API
UserAPI is a Node.js application that provides a RESTful API for managing user information. It supports CRUD operations on user data and offers flexible user management capabilities. The project emphasizes collaboration and version control with Git.

## Description

UserAPI is a collaborative Node.js application that simplifies user information management. It allows you to perform CRUD (Create, Read, Update, Delete) operations on user data through its RESTful API. The project is hosted on GitHub and welcomes contributions from the community.


## Features

UserAPI provides the following capabilities:

- Create new user profiles with customizable information such as name, email, phone number, and birth date.
- Retrieve user information based on various parameters such as ID, name, email, phone number, or birth date.
- Update user profiles to reflect changes in information.
- Delete user profiles to remove them from the system.
- Perform CRUD operations on user data, allowing full management of user information.
- Flexible and scalable RESTful API design.
- Integration with popular Node.js libraries such as **Express** for easy development and customization.
- Support for international phone number validation using the **google-libphonenumber** library.
- Localization support for Hebrew language using the **Hebcal** library.
- Unique identification for each user profile using universally unique identifiers (UUID) generated by the **UUID** library.
  
## Installation

To run the UserAPI locally, follow these steps:

<b>1. Clone the repository:</b>

```batch
git clone https://github.com/ayalasegal/UserAPI.git
```
   
<b>2. Install the dependencies:</b>

```batch
cd UserAPI
npm install
```

<b>3. Start the server:</b>
       
```batch
npm start
```
The server will be running at
   
   `http://localhost:3000`

# API Endpoints

- **GET /users**: Retrieve a list of all users.
- **GET /users/id/:id**: Retrieve a user by their ID.
- **GET /users/name/:name**: Retrieve a user by their name.
- **GET /users/mail/:email**: Retrieve a user by their email.
- **GET /users/phone/:phone**: Retrieve a user by their phone number.
- **GET /users/date/:birthDate**: Retrieve a user by their birth date.
- **POST /users**: Create a new user.
- **PUT /users/:id**: Update an existing user.
- **DELETE /users/:id**: Delete a user.

## Dependencies

The UserAPI project relies on the following dependencies:

- Node.js
- Express
- google-libphonenumber
- Hebcal
- UUID

These dependencies can be installed automatically by running 

```batch
npm install
```
## Contributing

We welcome contributions to the UserAPI project! If you would like to contribute, please follow these steps:

<b>1</b>. Fork the repository.\
<b>2.</b> Create a new branch for your feature or bug fix.\
<b>3.</b> Implement your changes.\
<b>4.</b> Commit and push your changes to your forked repository.\
<b>5.</b> Open a pull request, describing your changes and why they should be merged.

## License

This project is licensed under the MIT License.

## Issues

If you encounter any issues or have suggestions for improvement, please create an issue on the [GitHub repository](https://github.com/ayalasegal/UserAPI/issues).

## Acknowledgments

We would like to thank the contributors and developers who have worked on the dependencies used in this project.



