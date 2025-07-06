from typing import Union
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"msg": "api is working"}