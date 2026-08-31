
## Setup

### 1. Backend

```bash
cd backend
cp .env.example .env      # then edit values (see below)
npm install
npm run seed               # creates the demo login user
npm run dev                 # or: npm start
```

`.env` values to set:

| Variable | Notes |
|---|---|
| `MONGO_URI` | Local Mongo or an Atlas connection string |
| `JWT_SECRET` | Any long random string (never commit the real value) |
| `JWT_EXPIRES_IN` | e.g. `1h` |
| `PORT` | Defaults to `5000` |
| `CLIENT_ORIGIN` | Frontend origin for CORS, e.g. `http://localhost:3000` |
| `SEED_USER_USERNAME` / `SEED_USER_PASSWORD` | Used only by `npm run seed` |

The backend expects a running MongoDB instance (local `mongod`, Docker, or
Atlas) reachable at `MONGO_URI`.

### 2. Frontend

```bash
cd frontend
cp .env.example .env       # defaults should work for local dev
npm install
npm start
```

The app runs at `http://localhost:3000` and expects the API at
`http://localhost:5000/api` (configurable via `REACT_APP_API_BASE_URL`).

## Test login credentials
username:Admin
password:Admin@123

Pending Task
I have complted the remaing task as of now after two hours and complted the project within timeline
