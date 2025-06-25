
from django.shortcuts import render
from fastapi import FastAPI,Request
from asgiref.sync import sync_to_async

import random
from User.models import User
# Create your views here.

app = FastAPI()

@sync_to_async
def save_user(wallet,nonce):
        user,_ = User.objects.get_or_create(wallet=wallet.lower())
        user.nonce = nonce
        user.save()
        return user

@app.post("/nonce")
async def Nonce(request: Request):
    data = await request.json()
    wallet = data.get("wallet")
    if not wallet:
        return {"error": "Wallet address is required"}
    nonce = random.randint(100000,999999)
    
    user = await save_user(wallet,nonce)
    
    return {"wallet":wallet,"nonce": nonce}



