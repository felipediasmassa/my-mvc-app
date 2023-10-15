"""Top-level backend application"""


from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from controller.main import app as controller_app
from model.main import app as model_app


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/api", controller_app)
app.mount("/model", model_app)
