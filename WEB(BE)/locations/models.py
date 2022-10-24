from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator

from accounts.models import Profile


# Location model, pk = id
class Location(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.TextField(blank=True)
    category = models.TextField(blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    region1 = models.TextField(blank=True, null=True)
    region2 = models.TextField(blank=True, null=True)
    region3 = models.TextField(blank=True, null=True)
    x = models.FloatField(blank=True, null=True)
    y = models.FloatField(blank=True, null=True)
    number = models.TextField(blank=True, null=True)
    benefit = models.TextField(blank=True, null=True)

    likes = models.ManyToManyField(User, related_name='like_location', blank=True, verbose_name="좋아요")

    class Meta:
        managed = True
        db_table = 'locations_location'


# LocationUserStar model pk = id
class LocationUserStar(models.Model):
    location = models.ForeignKey(Location, on_delete=models.CASCADE, related_name='star', verbose_name='업소')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='star_location', verbose_name='평가자')
    rate = models.IntegerField(validators = [MinValueValidator(0), MaxValueValidator(5)], blank=False, null=False, verbose_name='별점')

    class Meta:
        managed = True
        db_table = 'locations_user_star'


# LocationReview model, pk = id
class LocationReview(models.Model):
    location = models.ForeignKey(Location, on_delete=models.CASCADE, related_name='location_review', verbose_name="업소")
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='location_review', verbose_name="게시자")
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, blank=True, related_name='location_review', verbose_name="프로필")
    likes = models.ManyToManyField(User, related_name='like_location_review', blank=True, verbose_name="좋아요")
    
    content = models.TextField(verbose_name="내용")
    image = models.ImageField(upload_to='location_reviews/', blank = True, verbose_name="이미지")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="등록시간")
    
    class Meta:
        managed = True
        db_table = 'locations_review'

# Mou model, pk = id
class Mou(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.TextField(blank=True)
    region = models.TextField(blank=True, null=True)
    number = models.TextField(blank=True, null=True)
    benefit = models.TextField(blank=True, null=True)

    likes = models.ManyToManyField(User, related_name='like_Mou', blank=True, verbose_name="좋아요")

    class Meta:
        managed = True
        db_table = 'MOU_data'


# MouUserStar model pk = id
class MouUserStar(models.Model):
    mou = models.ForeignKey(Mou, on_delete=models.CASCADE, related_name='star', verbose_name='업소')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='star_Mou', verbose_name='평가자')
    rate = models.IntegerField(validators = [MinValueValidator(0), MaxValueValidator(5)], blank=False, null=False, verbose_name='별점')

    class Meta:
        managed = True
        db_table = 'Mou_user_star'


# MouReview model, pk = id
class MouReview(models.Model):
    mou = models.ForeignKey(Mou, on_delete=models.CASCADE, related_name='review', verbose_name="업소")
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='review', verbose_name="게시자")
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, blank=True, related_name='review', verbose_name="프로필")
    likes = models.ManyToManyField(User, related_name='like_mou_review', blank=True, verbose_name="좋아요")
    
    content = models.TextField(verbose_name="내용")
    image = models.ImageField(upload_to='mou_reviews/', blank = True, verbose_name="이미지")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="등록시간")
    
    class Meta:
        managed = True
        db_table = 'Mou_review'