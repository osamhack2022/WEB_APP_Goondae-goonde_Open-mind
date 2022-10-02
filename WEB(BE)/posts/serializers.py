from rest_framework import serializers
from .models import Post
from accounts.serializers import ProfileSerializer

class PostSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(read_only=True) #nested serializer

    class Meta:
        model = Post
        fields = ("pk", "profile", "title", "content", "image", "created_at", "likes")


class PostCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ("title", "content", "image")