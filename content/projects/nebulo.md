# Nebulo: GitHub Codebase Analyzer

Nebulo is a web application designed to analyze GitHub codebases. It provides repository analysis, AI-powered question answering, and automated README generation. Users can purchase credits to unlock advanced features.

---

## Tech Badges

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Clerk.js](https://img.shields.io/badge/Clerk.js-000000?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.com/)
[![tRPC](https://img.shields.io/badge/tRPC-000000?style=for-the-badge&logo=trpc&logoColor=white)](https://trpc.io/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-000000?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/postgresql-4169e1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

---

## Overview

Nebulo allows users to analyze GitHub repositories using AI. It supports intelligent question answering, automated README generation, billing via credits, and seamless GitHub syncing.

![Nebulo Overview](https://github.com/user-attachments/assets/0974643c-f6d2-4f94-83c7-49f720e96424)

---

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS, Framer Motion
- **Authentication**: Clerk.js
- **Backend**: tRPC, Prisma ORM
- **Database**: PostgreSQL (NeonDB)
- **AI Integration**: Google Gemini API
- **Payments**: Razorpay API
- **Other Services**: Vector database, GitHub API

---

## Features

- Landing page with modern UI and animations
- Collapsible sidebar for project navigation
- AI-powered question answering on repositories
- Automated README generation from codebase
- Credit-based billing system
- GitHub repository syncing
- Fully responsive UI with protected routes

---

## Screenshots

### Dashboard

![Dashboard](https://github.com/user-attachments/assets/9faccc3e-3cc9-4604-9fc4-13712381b5c7)

### Q&A Page

![QnA](https://github.com/user-attachments/assets/62ae3d6e-77e4-4831-aff8-7cddfe988657)

### README Generator

![Readme Generator](https://github.com/user-attachments/assets/f4d3bfd0-1b7f-4d2b-a972-d29fcc53a7de)

### Billing

![Billing](https://github.com/user-attachments/assets/f3e35059-2b3a-408b-9704-912769641a81)

### Create Project

![Create Project](https://github.com/user-attachments/assets/b2542fcf-9bba-44e8-b209-473240692e60)

---

## Usage Instructions

1. Sign up or log in using Clerk authentication
2. Create a project by providing a GitHub repository URL
3. Analyze the codebase and ask AI-powered questions
4. Generate README files automatically
5. Purchase credits via the billing page if required

---

## Project Structure

```text
nebulo/
├── prisma/
│   └── schema.prisma
├── public/
├── src/
│   ├── app/
│   │   ├── (protected)/
│   │   ├── api/
│   │   ├── billing/
│   │   ├── create/
│   │   ├── dashboard/
│   │   ├── qa/
│   │   └── readme/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── server/
│   ├── styles/
│   ├── trpc/
│   └── middleware.ts
├── env.js
├── next.config.js
├── package.json
└── tsconfig.json
```
