# Tasks API

## Getting Started

1. API Node JS + Express JS
2. Persistent data with MongoDB

### Prerequisites

We need install NodeJs and MongoDB

```
sudo apt install nodejs npm

sudo apt-get install -y mongodb-org
```

## Running the Tasks

We need to rename the file 

```
.env.example to .env
```

If we are in enviroment of development we run
```
npm run dev
```
But if us enviroment are production we need to run
```
npm install
```

### API TASKS
| Route           | Method | Parameters | Body                                | Description               |
| --------------- | :----: | ---------: | ----------------------------------- | ------------------------- |
| /api/tasks      |  GET   |          - | -                                   | Gets all tasks            |
| /api/tasks      |  POST  |            | description: string, author: string | Creates a new task        |
| /api/tasks/{id} |  GET   | id: number | -                                   | Get task with Id {id}     |
| /api/tasks/{id} |  PUT   | id: number | description: string, author: string | Updates task with Id {id} |
| /api/tasks/{id} | DELETE | id: number | -                                   | Deletes task with Id {id} |

### API USERS
| Route           | Method | Parameters | Body                                               | Description               |
| --------------- | :----: | ---------: | ---------------------------------------------------| ------------------------- |
| /api/users      |  GET   |          - | -                                                  | Gets all users            |
| /api/users      |  POST  |            | firstname: string, lastname: string, email: string | Creates a new user        |
| /api/users/{id} |  GET   | id: number | -                                                  | Get user with Id {id}     |
| /api/users/{id} |  PUT   | id: number | firstname: string, lastname: string, email: string | Updates user with Id {id} |
| /api/users/{id} | DELETE | id: number | -                                                  | Deletes user with Id {id} |
