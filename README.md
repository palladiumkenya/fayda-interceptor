# FAYDA Interceptor Service

This project is an interceptor service for FAYDA, designed to relay and process requests between systems. It provides endpoints for patient and consent management, and is intended to be run in a containerized environment for ease of deployment and scalability.

## Features
- Patient and consent management endpoints
- Integration-ready for FAYDA workflows
- Containerized with Docker for easy deployment

## Requirements
- [Docker](https://www.docker.com/)

## Installation
1. **Clone the repository:**
   ```sh
   git clone <repo-url>
   cd fayda-interceptor
   ```
2. **Install and start the application:**
   ```sh
   ./install.sh
   ```
   This script will build and start the Docker containers required for the service.

## Stopping the Application
To stop the application and its containers, run:
```sh
./stop.sh
```

## Environment Variables
Copy the example environment file and update as needed:
```sh
cp env.example .env
```

## Project Structure
- `src/` - Source code for the interceptor service
- `docker/` - Docker-related files and database initialization scripts
- `install.sh` - Script to build and start the service
- `stop.sh` - Script to stop the service
- `Dockerfile` - Docker image definition
- `docker-compose.yml` - Multi-container orchestration

## License
[MIT](LICENSE)
