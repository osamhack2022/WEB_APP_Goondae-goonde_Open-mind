from django.db import models
from django.contrib.auth.models import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True) #primary_key를 User의 pk로 설정하여 통합적으로 관리
    nickname = models.CharField(max_length=30)
    profile_image = models.ImageField(upload_to='profile/', default='profile/default/default.png')

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)