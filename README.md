# React-Vite-Mongo-Template

A full stack template using Vite + React (frontend), Flask (backend), and MongoDB (database).

## Features

- Vite + React frontend (JavaScript)
- Flask backend (Python)
- MongoDB database
- Shared `.env` file at project root
- Example API connection

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Setup environment variables

Copy the example file and edit as needed:

```bash
cp .env.example .env
```

### 3. Install backend dependencies

```bash
cd backend
python -m venv venv
# On Windows:
venv\Scripts\activate
# On Mac/Linux:
# source venv/bin/activate

pip install -r requirements.txt
```

### 4. Start the backend server

```bash
python app.py
```

### 5. Install frontend dependencies

```bash
cd ../frontend
npm install
```

### 6. Start the frontend dev server

```bash
npm run dev
```

## License

MIT
