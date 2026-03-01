# Task Management & Collaboration Platform

A full-stack, production-ready task management platform built for teams — featuring a RESTful Spring Boot backend and a modern Next.js frontend. It enables teams to organize projects, track tasks across statuses and priorities, and collaborate through threaded comments and role-based access.

**Frontend Repo:** [Task-Management-Platform-Frontend](https://github.com/Akshansh029/Task-Management-Platform-Frontend)

**Backend Repo:** [Task-Management-Platform-Backend](https://github.com/Akshansh029/Task-Management-Platform-Backend)

---

## Features

- **Dynamic Dashboard** — Overview of project stats, recent activities, and tasks assigned to you
- **Project Management** — Create and manage multiple projects, track progress, and keep teams organized
- **Task Tracking** — Full task lifecycle management with priorities (Urgent, High, Medium, Low), statuses (TODO, IN_PROGRESS, DONE), and assignee support
- **Team Collaboration** — Real-time user search, role-based user management (Admin, Member, Viewer), and threaded comments on tasks
- **Flexible Labeling** — Organize tasks and projects with customizable labels
- **RESTful API** — Clean, documented endpoints with OpenAPI 3.0 / Swagger UI
- **Responsive UI** — Dark-mode-ready interface with smooth micro-animations

---

## Tech Stack

### Frontend

- Next.js 15 (App Router)
- React 18
- TanStack Query v5
- Tailwind CSS
- shadcn/ui (Radix UI)
- Axios

### Backend

- Spring Boot 3.2
- Spring Data JPA / Hibernate
- PostgreSQL 16
- OpenAPI 3.0 / Swagger UI
- Maven
- Docker

### Deployment

- Vercel (Frontend deployment)
- Render.com (Backend deployment)
- Neon.tech (Database)

---

### Frontend Data Architecture

- **API Layer** — Centralized Axios client with interceptors for consistent request handling
- **Hook Layer** — Custom TanStack Query hooks for data fetching, caching, and optimistic updates
- **View Layer** — Modular shadcn/ui components for a consistent, premium look and feel

### Backend Package Structure

```text
com.akshansh.taskmanagementplatform/
├── controller/     # REST API endpoints
├── service/        # Business logic
├── repository/     # Data access (Spring Data JPA)
├── entity/         # JPA entities
├── dto/            # Request/Response DTOs
├── exception/      # Custom exceptions & global handlers
└── config/         # App configuration
```

---

## Screenshots

---

## API Endpoints

| Endpoint                 | Description         |
| ------------------------ | ------------------- |
| `GET/POST /api/users`    | User management     |
| `GET/POST /api/projects` | Project management  |
| `GET/POST /api/tasks`    | Task management     |
| `GET/POST /api/comments` | Comments on tasks   |
| `GET/POST /api/labels`   | Label management    |
| `GET /api/stats`         | Platform statistics |

Full interactive API documentation available via Swagger UI:
[https://task-management-platform-backend-9hc5.onrender.com/swagger-ui.html](https://task-management-platform-backend-9hc5.onrender.com/swagger-ui.html)

---

## Database Schema

The data model is built around five core entities:

- **users** — Accounts with role-based access (Admin, Member, Viewer)
- **projects** — Containers for work, with owners and team members
- **tasks** — Work items with status, priority, due dates, and assignments
- **comments** — Threaded discussion on tasks
- **labels** — Reusable tags for organizing tasks and projects

---

## Todo

- [ ] Spring Security with JWT authentication
- [ ] Role-based access control (RBAC)
- [ ] Unit & integration tests
- [ ] Activity logs / audit trail
- [ ] Task search and filtering
- [ ] Email notifications
