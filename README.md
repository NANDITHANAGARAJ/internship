# Event Management Dashboard Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Running the Project](#running-the-project)
5. [API Documentation](#api-documentation)
   - [Event Management API](#event-management-api)
   - [Attendee Management API](#attendee-management-api)
   - [Task Management API](#task-management-api)

## Introduction
The Event Management Dashboard is a web application that allows organizations to manage events, attendees, and tasks efficiently. It provides features for CRUD operations on events, attendee management, and task tracking with progress visualization.

## Prerequisites
Before running the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v12 or later)
- [MongoDB](https://www.mongodb.com/) (for the database)
- A code editor (e.g., [Visual Studio Code](https://code.visualstudio.com/))

## Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/NANDITHANAGARAJ/internship.git
   cd internship
   ```

2. **Install Dependencies**:
   Navigate to the `backend` directory and install the necessary packages:
   ```bash
   cd backend
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the `backend` directory and add your MongoDB connection string:
   ```plaintext
   MONGODB_URI=<your_mongodb_connection_string>
   ```

## Running the Project
1. **Start the Backend Server**:
   In the `backend` directory, run:
   ```bash
   node server.js
   ```
   The server should start and display "Server running on port 5000" if successful.

2. **Open the Frontend**:
   Open the `public/index.html` file in your web browser to access the Event Management Dashboard.

## API Documentation
### Event Management API
- **Create an Event**
  - **Endpoint**: `POST /api/events`
  - **Request Body**:
    ```json
    {
      "name": "Event Name",
      "description": "Event Description",
      "location": "Event Location",
      "date": "YYYY-MM-DD",
      "attendees": []
    }
    ```

- **Get All Events**
  - **Endpoint**: `GET /api/events`
  - **Response**:
    ```json
    [
      {
        "id": "event_id",
        "name": "Event Name",
        "description": "Event Description",
        "location": "Event Location",
        "date": "YYYY-MM-DD",
        "attendees": []
      }
    ]
    ```

- **Update an Event**
  - **Endpoint**: `PUT /api/events/:id`
  - **Request Body**: Same as Create Event.

- **Delete an Event**
  - **Endpoint**: `DELETE /api/events/:id`

### Attendee Management API
- **Add an Attendee**
  - **Endpoint**: `POST /api/attendees`
  - **Request Body**:
    ```json
    {
      "name": "Attendee Name",
      "email": "attendee@example.com"
    }
    ```

- **Get All Attendees**
  - **Endpoint**: `GET /api/attendees`
  - **Response**:
    ```json
    [
      {
        "id": "attendee_id",
        "name": "Attendee Name",
        "email": "attendee@example.com"
      }
    ]
    ```

- **Delete an Attendee**
  - **Endpoint**: `DELETE /api/attendees/:id`

### Task Management API
- **Create a Task**
  - **Endpoint**: `POST /api/tasks`
  - **Request Body**:
    ```json
    {
      "name": "Task Name",
      "deadline": "YYYY-MM-DD",
      "status": "Pending",
      "attendeeId": "attendee_id",
      "eventId": "event_id"
    }
    ```

- **Get Tasks for an Event**
  - **Endpoint**: `GET /api/tasks/event/:eventId`
  - **Response**:
    ```json
    [
      {
        "id": "task_id",
        "name": "Task Name",
        "deadline": "YYYY-MM-DD",
        "status": "Pending",
        "attendeeId": "attendee_id"
      }
    ]
    ```

- **Update Task Status**
  - **Endpoint**: `PUT /api/tasks/:id`
  - **Request Body**:
    ```json
    {
      "status": "Completed"
    }
    ```

## Conclusion
This documentation provides the necessary steps to set up and run the Event Management Dashboard project, along with details about the APIs developed. For any issues or questions, please refer to the project's GitHub repository or contact the developer.




https://github.com/user-attachments/assets/58f116c5-1c4e-462e-8729-6a8e06a028f2


