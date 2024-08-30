## Backend Framework with Nodejs and Express
An API to manage people and their jobs.

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Use](#use)
- [API routes](#api-routes)
- [Project structure](#project-structure)
- [Contributions](#contributions)

## Description
This API allows you to create, read, update and delete people and their respective jobs. It is useful for managing personal and job information in a larger system.

## Installation

1. Clone this repository:
```bash
git clone https://github.com/Marcelo-G21/Backend-Framework-People-Jobs.git
```
2. Install depenencies:
```bash
yarn install
```
3. Set environment variables: Create an .env file in the root of the project with the following variables:
```bash
DB_URI=mongodb://localhost:27017/your-database
PORT=3000
```
4. Start server:
```bash
node app.js
```
## Use

You can interact with the API using tools such as [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/). Make sure that the server is running before making requests.

## API routes

- `GET /people`: List all people
- `GET /people/:id`: Get a specific person by ID
- `POST /people`: Create a new person
- `PUT /people/:id`: Update an existing person
- `DELETE /people/:id`: Delete a person
- `GET /people/:id/jobs`: List all jobs of a person
- `POST /people/:id/jobs`: Add a new job to a person
- `PUT /people/:id/jobs/:jobId`: Update a specific job
- `DELETE /people/:id/jobs/:jobId`: Delete a specific job

## Project structure

- `/config`: Contains the database connection configuration.
- `/controllers`: Contains the logic to handle HTTP requests.
- `/middlewares`: Contains the data validations.
- `/models`: Contains the Mongoose schemas.
- `/routes`: Contains the API route definitions.
- `/services`: Contains the business logic and communication with the database.
- `app.js`: Main server entry point.

## Contributions
Contributions are welcome. Please follow the steps below to contribute:

1. Make a fork of the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Upload the branch (`git push origin feature/new-feature`).
5. Open a Pull Request.

### ᓚ₍ ^. .^₎
