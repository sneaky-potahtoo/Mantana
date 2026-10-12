# Mantana

A full-stack app for saving YouTube videos and website links in a personal collection.

## Overview

Mantana has a React frontend and an Express backend. Users can sign up, sign in, save links, view them on a dashboard, and generate a link to share their collection.

## Tech stack

- **Frontend:** React, TypeScript, Vite, Tailwind CSS
- **Backend:** Node.js, Express, TypeScript, MongoDB, Mongoose, JWT

## Project structure

```text
Mantana (Backend)/   Express API and database models
Mantana (Frontend)/  React app
```

## Run locally

You need Node.js, npm, and a MongoDB database. Run each app in a separate terminal.

**Backend**

```bash
cd "Mantana (Backend)"
cp .env.example .env
npm install
npm run dev
```

Set `MONGODB_URI` and `JWT_PASSWORD` in `.env`. The default port is `3000`.

**Frontend**

```bash
cd "Mantana (Frontend)"
cp .env.example .env
npm install
npm run dev
```

Set `VITE_BACKEND_URL` in its `.env` file to the backend URL. Vite usually serves the app at `http://localhost:5173`.

## API

The backend provides sign-up, sign-in, content, and brain-sharing endpoints under `/api/v1`.

## Note

The backend can generate a share link, but the frontend does not yet have a public share page.