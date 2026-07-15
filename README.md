# Book Bank

A MERN-stack book inventory app. `mern-client` is a React + Vite frontend, `mern-server` is an Express + MongoDB backend.

_Originally built in February 2026._

## Project structure

```
Book bank/
├── mern-client/   # React (Vite) frontend
└── mern-server/   # Express + MongoDB backend
```

## Getting started

### 1. Server (`mern-server`)

```bash
cd mern-server
npm install
cp .env.example .env   # then fill in your own MongoDB connection string
npm start
```

The server reads its MongoDB connection string from the `MONGO_URI` environment variable — see `.env.example`. Never commit your real `.env` file.

### 2. Client (`mern-client`)

```bash
cd mern-client
npm install
cp .env.example .env   # defaults to http://localhost:5000, change if needed
npm run dev
```

The client reads the API base URL from `VITE_API_URL` — see `.env.example`.

## Notes

- `node_modules`, `.env`, and build output (`dist`) are gitignored on purpose — run `npm install` in each folder after cloning.
- Firebase Authentication (email/password + Google) is used for login/signup on the client, configured in `mern-client/src/firebase/firebase.config.js`.