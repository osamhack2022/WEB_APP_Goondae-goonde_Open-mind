from django.db import models
from django.contrib.auth.models import UserManager, AbstractUser

class User(AbstractUser):
    objects = UserManager()
    
    nickname = models.CharField(max_length=128)
    profile_image = models.ImageField(upload_to='profile/', default='profile/default/default.png')

