from django.db import models
from django.contrib.auth.models import User
from users.models import Profile

class Post(models.Model):
    title = models.CharField(max_length=128, verbose_name="제목")
    content = models.TextField(verbose_name="내용")
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='author', verbose_name="게시자")
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, blank=True, related_name='author_profile', verbose_name="프로필")
    image = models.ImageField(upload_to='post/', blank = True, verbose_name="이미지")
    likes = models.ManyToManyField(User, related_name='like_posts', verbose_name="좋아요")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="등록시간")
