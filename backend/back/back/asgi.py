"""
ASGI config for back project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.2/howto/deployment/asgi/
"""

import os
import django
from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'back.settings')
django.setup()

from fastapi import FastAPI
from Api.views import app as fastapi_routes  # FastAPI routes


main_app = FastAPI()

main_app.mount("/api", fastapi_routes)
main_app.mount("/django", get_asgi_application())




