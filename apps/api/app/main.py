from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import health, appointments, questionnaires, schedule_confirmations, doctors, rooms, procedures, patients

app = FastAPI(title="Dental Portal API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # adjust in prod
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router, prefix="/health", tags=["health"])
app.include_router(doctors.router, prefix="/doctors", tags=["doctors"])
app.include_router(rooms.router, prefix="/rooms", tags=["rooms"])
app.include_router(procedures.router, prefix="/procedures", tags=["procedures"])
app.include_router(patients.router, prefix="/patients", tags=["patients"])
app.include_router(appointments.router, prefix="/appointments", tags=["appointments"])
app.include_router(questionnaires.router, prefix="/questionnaires", tags=["questionnaires"])
app.include_router(schedule_confirmations.router, prefix="/schedule/confirmations", tags=["schedule_confirmations"])
