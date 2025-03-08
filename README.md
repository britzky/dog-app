# Full-Stack Application with DevOps Practices

This project is a **test full-stack application** designed to showcase my skills in **full-stack development** and **DevOps practices**. It includes a frontend, a backend, and a Dockerized setup using Docker Compose for container orchestration.

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Features](#features)
4. [DevOps Practices](#devops-practices)
5. [Setup and Installation](#setup-and-installation)
6. [Running the Application](#running-the-application)
7. [Future Improvements](#future-improvements)
8. [License](#license)

---

## Project Overview
This project is a simple full-stack application designed to demonstrate my ability to:
- Develop and containerize a **frontend** and **backend** application.
- Use **Docker** and **Docker Compose** for container orchestration.
- Apply **DevOps best practices** such as containerization, environment management, and automation.

The application consists of:
- A **frontend** built with [React].
- A **backend** built with [Node.js].
- A **Dockerized setup** to run the application in a containerized environment.

---

## Technologies Used
### Frontend
- React
- Vite

### Backend
- Node.js
- Express

### DevOps Tools
- **Docker** for containerization.
- **Docker Compose** for multi-container orchestration.
- **Git** for version control.

---

## Features
- **Frontend**:
  - Simple UI that shows a random dog when you click the button.
- **Backend**:
  - RESTful API with an endpoint to fetch random information about a dog.
- **DevOps**:
  - Containerized frontend and backend using Docker.
  - Environment variables for configuration management.
  - Scalable and reproducible setup using Docker Compose.

---

## DevOps Practices
This project demonstrates the following DevOps practices:
1. **Containerization**:
   - Frontend and backend are containerized using Docker.
   - Lightweight base images (e.g., `node:alpine`) are used to optimize image size.
2. **Environment Management**:
   - Environment variables are used to manage configuration (e.g., API keys, database credentials).
   - `.env` files are included in `.gitignore` to avoid committing sensitive data.
3. **Automation**:
   - Docker Compose is used to automate the setup and orchestration of the application.
4. **Best Practices**:
   - Multi-stage builds to reduce Docker image size.
   - Proper use of `.dockerignore` and `.gitignore` to exclude unnecessary files.

---

## Setup and Installation
### Prerequisites
- Docker and Docker Compose installed on your machine.
- Git for cloning the repository.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/britzky/dog-app.git
   cd dog-app
