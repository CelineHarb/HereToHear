# Here to Hear

A daily journaling and gratitude companion with AI-powered memory and growth tracking. A modern full stack application built with React, TypeScript, Node.js, Supabase, and the Claude AI API.

> 🚧 This project is currently a work in progress.

---

## The Idea

Most journaling apps let you write and forget. Here to Hear is different — it remembers.

Users write a daily journal entry, log three things they're grateful for, and receive an empathetic AI response that references past entries, notices patterns, and reflects their growth back to them over time. The goal is to create something that genuinely feels like a thoughtful companion, not just a text box.

---

## Features

- **Daily journaling** — write freely with a mood score each day
- **Gratitude tracking** — log three things you're grateful for
- **AI responses** — the Claude API responds to each entry with empathy and support
- **AI memory** — past entries are passed as context so the AI can reference your history
- **Visual timeline** — see your mood over time and gratitude streaks at a glance
- **Growth reflections** — the AI surfaces patterns and progress across your entries
- **Authentication** — secure sign up and login via Supabase Auth

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, TypeScript, Vite |
| Routing | React Router v6 |
| Backend | Node.js, Express, TypeScript |
| Database | Supabase (PostgreSQL) |
| Authentication | Supabase Auth |
| AI | Claude API (Anthropic) |
| Deployment | Vercel |

---

## Project Status

This project is actively being built. Current progress:

- [ ] Project setup and folder structure
- [ ] Landing page UI
- [ ] Auth page UI (sign in / sign up)
- [ ] Journal page UI with mood selector and gratitude inputs
- [ ] Supabase database setup
- [ ] Authentication (sign up, log in, log out)
- [ ] Saving journal entries to the database
- [ ] Claude API integration
- [ ] AI memory system
- [ ] Visual timeline
- [ ] AI growth reflections
- [ ] Deployment to Vercel

---

## Running Locally

```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/HereToHear.git

# Navigate into the project
cd HereToHear

# Install dependencies
npm install

# Start the development server
npm run dev
```

---
