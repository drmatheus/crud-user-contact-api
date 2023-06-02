# USER CONTACT API

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

The Customer Management API is a RESTful web service that allows users to register, create customers, and manage contacts associated with each customer. It provides endpoints to perform CRUD (Create, Read, Update, Delete) operations on customers and their contacts, including phone numbers and email addresses.

## Documentation
<a href="https://drmatheus.github.io/user-contact-API-documentation/"> ### Documentation </a>

## Prerequisites

Before you begin, make sure you have the following tools installed on your machine:

- Node.js (version 18.16.0)
- Yarn (version 1.22.19(optional)) or npm (version 9.6.6)
- PostgreSQL (version 15.3)

## Installation

Follow the steps below to set up the development environment:

1. Clone this repository:

   ```
   git clone https://github.com/YOUR_USERNAME/repository-name.git
   ```

2. Navigate to the cloned directory:

   ```
   cd repository-name
   ```

3. Install the project dependencies using Yarn or npm:

   ```
   yarn install
   ```

4. Rename the .env.example file to .env and update the environment variables, including the PostgreSQL connection details, as needed.

5. Run the database migrations to set up the database schema:

   ```
   yarn typeorm migration:run -- -d ./src/data-source
   ```

## Running the Application

To start the application, run the following command:<br>

```
yarn dev
```

This will start the development server using nodemon, allowing you to make changes to the source code and see the updates automatically.
