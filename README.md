# Skribe Website - Vite React + Nodemailer

## Project Structure

```
Skribe Website/
├── frontend/          # React + Vite frontend
├── backend/           # Express + Nodemailer backend
└── package.json       # Root package for running both
```

## Setup

### Install all dependencies:
```bash
npm run install:all
```

Or install separately:
```bash
cd frontend && npm install
cd ../backend && npm install
```

## Configure .env

The `.env` file in the `backend/` folder is already configured with your credentials:
- Sends to: `guru@skribe.app`
- From: `kguruprasad@gmail.com`

## Run

From the root directory:
```bash
npm start
```

This starts:
- Frontend: http://localhost:3000
- Backend: http://localhost:5001

Form submissions will be emailed to `monumayank320@gmail.com` using Nodemailer.

## Note

Nodemailer CANNOT work in frontend - it requires a backend server for security and SMTP access.
