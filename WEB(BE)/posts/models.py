from django.db import models
from django.urls import reverse
from django.contrib.auth.models import User

class Post(models.Model):
    POST_TYPES = [
        (0, "칼럼"),
        (1, "뉴스"),
        (2, "소설"),
    ]
    title = models.CharField(max_length=200,
                            verbose_name="제목")
    content = models.TextField(verbose_name="내용")
    view_count = models.IntegerField(default=0,
                                    verbose_name="조회수")
    _type = models.PositiveSmallIntegerField(choices=POST_TYPES,
                                            verbose_name="게시글타입")
    image = models.ImageField(upload_to="posts/img", default="posts/default/default_post_img.png")
    created_at = models.DateTimeField(auto_now_add=True,
                                     verbose_name="등록시간")
    updated_at = models.DateTimeField(auto_now=True,
                                     verbose_name="업데이트시간")
    
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.title
    
    def get_absolute_url(self):
        return reverse('posts:show', args=[self.pk])
