# Voting App
This is a voting application built using the MERN stack (MongoDB, Express.js, React, Node.js). This app allows users to create polls, vote on multiple polls (but only once per poll), and view the results in a graphical format.

# Table of Contents
 - Features
 - Installation
 - Usage
 - API Endpoints
 - Technologies Used
 - Contributing
 - License
 - Contact
 
# Features
 - User Authentication: Register and login functionality for users.
 - Poll Creation: Authenticated users can create new polls.
 - Voting: Users can vote on polls but are restricted to one vote per poll.
 - Results Display: Poll results are displayed using graphical representations (charts).

# Installation
To get a local copy up and running follow these simple steps:

### Prerequisites
 - Node.js
 - npm (Node Package Manager)
 - MongoDB

### Backend Setup
Clone the repository:

 - Copy code
git clone `repo link`
 - cd voting-app
 - cd backend //Navigate to the server directory
 - npm install //Install dependencies
 - Create a .env file in the server directory and add the following environment variables:
MONGO_URI=your_mongodb_connection_string
PORT=port_number
 - npm start //Start the server
The backend server will be running on http://localhost:PORT. //port u have encrypted in .env file

### Frontend Setup

 - cd ../client //Navigate to the client directory
 - npm install //Install dependencies
 - npm start //Start the frontend development server
The frontend server will be running on http://localhost:3000.

# Usage
 - Register or log in to the application.
 - Create new polls by providing a question and options.
 - Vote on available polls (one vote per poll per user).
 - View the poll results in a graphical format.

## Technologies Used
 - MongoDB: For the database.
 - Express.js: For the backend framework.
 - React: For the frontend framework.
 - Node.js: For the server environment.
 - JWT: For user authentication.
 - Chart.js: For displaying poll results graphically.

# Contributing
Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

## Points to be noted-
There are some flaws in the application where u can contribute to-
 - Auto-refresh on the graph page.
 - redirect to vote page on click instead on clicking vote.

## Fork the Project
 - Create your Feature Branch (git checkout -b feature/AmazingFeature)
 - Commit your Changes (git commit -m 'Add some AmazingFeature')
 - Push to the Branch (git push origin feature/AmazingFeature)
 - Open a Pull Request

# License
Distributed under the MIT License. See LICENSE for more information.

Contact
Your Name - sandeshlawhale@gmail.com
