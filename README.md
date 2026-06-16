Project: Student Details

Overview
- FastAPI backend (Backhend/) with SQLAlchemy and PostgreSQL.
- Vite + React frontend (Fronthend/vite-project/).

Quick start

1) Backend
- Create and activate a Python virtual environment in the `Backhend` folder.

```powershell
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

- Configure database connection in `.env` or edit `Backhend/Database.py` to point to your PostgreSQL instance. Example `.env` below.

- Run the backend:

```powershell
uvicorn main:app --reload
```

2) Frontend

```bash
cd Fronthend/vite-project
npm install
npm run dev
```

Notes
- Before pushing to GitHub, ensure you do NOT commit secrets. Use `.env` locally and commit `.env.example` instead.

