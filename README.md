# Chat server based on a microservices architecture 

This is a backend implementation of a real-time chat server using Node.js, TypeScript, Express, and RabbitMQ. It is divided into 3 services: User Service, Chat Service and Notification Service.

## Architecture Overview

The system is built on a microservices architecture with three main components:

1. **User Service**: Handles user authentication, registration, and profile management
2. **Chat Service**: Manages chat rooms, messages, and real-time communication
3. **Notification Service**: Processes and delivers notifications to users

## Technologies Used

- **Node.js & TypeScript**: Core platform and language
- **Express**: Web framework for building APIs
- **MongoDB**: Database for persistent storage
- **RabbitMQ**: Message broker for inter-service communication
- **JWT**: Authentication mechanism

## Services

### User Service

Responsible for:
- User registration and authentication
- Profile management
- User data storage and retrieval

### Chat Service

Responsible for:
- Creating and managing chat rooms
- Storing and retrieving messages
- Real-time message delivery

### Notification Service

Responsible for:
- Processing notification events
- Delivering notifications to appropriate users
- Managing notification preferences

## Communication

Services communicate with each other asynchronously using RabbitMQ message queues:
- `USER_DETAILS_REQUEST`: For requesting user information
- `USER_DETAILS_RESPONSE`: For receiving user information

## Getting Started

### Prerequisites

- Node.js (v14+)
- MongoDB
- RabbitMQ

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/chat-server.git
   cd chat-server
   ```

2. Install dependencies for each service:
   ```bash
   # User Service
   cd user-service
   npm install
   
   # Chat Service
   cd ../chat-service
   npm install
   
   # Notification Service
   cd ../notification-service
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in each service directory with the following variables:
   ```
   # For User Service
   PORT=3001
   MONGODB_URI=mongodb://localhost:27017/user-service
   JWT_SECRET=your_jwt_secret
   MSG_BROKER_URL=amqp://localhost
   
   # Similar configuration for other services with appropriate ports
   ```

4. Start RabbitMQ and MongoDB:
   ```bash
   # Using Docker (recommended)
   docker run -d --name mongodb -p 27017:27017 mongo
   docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:management
   ```

5. Start the services:
   ```bash
   # Development mode
   cd user-service
   npm run dev
   
   # Repeat for other services in separate terminals
   ```


