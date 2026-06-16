A full-stack memory preservation platform to seal and schedule digital capsules for the future

---

## Seal Memories. Unlock the Future.

In an era of instant gratification, **Time Capsule** encourages slow, intentional memory keeping. Create sealed digital vaults containing messages, photos, and notes — then schedule them to be revealed at any future date. Whether it's a letter to your future self, a shared memory vault for a graduating friend group, or a collection of milestones for a newborn, Time Capsule provides a secure and nostalgic way to bridge the gap between present and future.

---

## Features

- **Scheduled Unlocking** — Capsules remain strictly sealed until the user-defined unlock date; no peeking allowed
- **Custodian Network** — Invite collaborators to contribute content or viewers to wait for the reveal alongside you
- **Multimedia Support** — Attach text messages, high-quality images, and files to your memory vault via AWS S3
- **Smart Notifications** — Automated email alerts powered by Resend, sent the moment a capsule unlocks
- **Public Vaults** — Explore time capsules shared publicly by other users for discovery and inspiration
- **Role-Based Access** — Granular control via `OWNER`, `CONTRIBUTOR`, and `VIEWER` roles per capsule
- **JWT Authentication** — Stateless, secure user sessions with Spring Security
- **Responsive Glassmorphic UI** — Fluid design optimized for both desktop and mobile

---

## Tech Stack

### Frontend

- Next.js 14 (App Router)
- React 18
- Tailwind CSS + Radix UI
- Zustand (State Management)
- React Hook Form + Zod (Forms & Validation)
- Hugeicons + Lucide React

### Backend

- Spring Boot 3.x
- Java 21
- Spring Security + JWT (Stateless Auth)
- Spring Data JPA + Hibernate
- PostgreSQL (Primary Database)
- Flyway (Database Migrations)
- Amazon S3 (File Storage)
- Spring `@Scheduled` (Background Jobs)
- Resend (Transactional Email)

### Deployment

- Vercel (Frontend)
- Render.com (Backend)
- Neon.tech (PostgreSQL)

---

## Architecture

The system follows a classic client-server architecture with clear separation of concerns. The Next.js frontend communicates with a RESTful Spring Boot API, which handles business logic, scheduling, and data persistence. Amazon S3 manages all file storage, while Spring's built-in task scheduler handles capsule unlock jobs in the background.

![Architecture](/project-images/timecapsule/time-capsule-arch-diag.png)

---

## Screenshots

### Landing Page

![Landing Page](/project-images/timecapsule/landing.png)

### Dashboard

![Dashboard](/project-images/timecapsule/dashboard.png)

### Create Capsule

![Create Capsule](/project-images/timecapsule/create-capsule.png)

### Capsule Details

![Capsule Details](/project-images/timecapsule/capsule-details.png)

### Email Notification

![Email Notification](/project-images/timecapsule/email-notification.png)

---

## Security

- **JWT Authentication** — Secure, stateless user sessions with no server-side session storage
- **Resource Privacy** — Locked capsule content is inaccessible at the data layer until the unlock date passes
- **Role-Based Access Control** — Granular permissions via `OWNER`, `CONTRIBUTOR`, and `VIEWER` roles
- **Input Sanitization** — Strictly validated payloads using Zod on the frontend and Spring Validation on the backend

---

## What's Next?

- [ ] **Dockerization** — Full-stack containerization for one-click deployment
- [ ] **Multimedia Player** — In-app audio player for voice memo memories
- [ ] **Advanced Filtering** — Search and filter public vaults by category or nostalgia tags
