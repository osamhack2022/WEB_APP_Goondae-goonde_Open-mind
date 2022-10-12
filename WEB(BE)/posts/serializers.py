from rest_framework import serializers
from .models import Post
from accounts.serializers import ProfileSerializer

class PostSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(read_only=True) #nested serializer

    class Meta:
        model = Post
        fields = ("pk", "author", "profile", "title", "content", "image", "created_at", "likes")

    author = serializers.SerializerMethodField("get_authors_username")
    def get_authors_username(self, obj):
        return obj.author.username
class PostCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ("title", "content", "image")