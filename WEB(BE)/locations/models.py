from django.db import models
from django.contrib.auth.models import User

from accounts.models import Profile


# Location model, pk = name 
class Location(models.Model):
    name = models.TextField(blank=True, primary_key=True)
    category = models.TextField(blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    number = models.TextField(blank=True, null=True)
    benefit = models.TextField(blank=True, null=True)

    class Meta:
        # Only read crawled_data table
        managed = False
        db_table = 'crawled_data'
    
    def __str__(self):
        return self.name

# Review model, pk = id
class Review(models.Model):
    location = models.ForeignKey(Location, on_delete=models.CASCADE, related_name='review', verbose_name="업소")
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='review', verbose_name="게시자")
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, blank=True, related_name='review', verbose_name="프로필")
    likes = models.ManyToManyField(User, related_name='like_review', blank=True, verbose_name="좋아요")
    
    title = models.CharField(max_length=128, verbose_name="제목")
    content = models.TextField(verbose_name="내용")
    image = models.ImageField(upload_to='reviews/', blank = True, verbose_name="이미지")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="등록시간")
    
    class Meta:
        managed = True
        db_table = 'locations_review'

