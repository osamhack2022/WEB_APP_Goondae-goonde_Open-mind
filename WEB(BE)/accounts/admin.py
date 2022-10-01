from django.contrib import admin

from django.contrib.auth.models import User
from .models import User

admin.site.register(User)
