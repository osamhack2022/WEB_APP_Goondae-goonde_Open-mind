from cgitb import lookup
from rest_framework import serializers

from accounts.serializers import ProfileSerializer

from locations.models import Location, Review

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = '__all__'
    



class ReviewSerializer(serializers.ModelSerializer):
    location = LocationSerializer(read_only=True)
    profile = ProfileSerializer(read_only=True)

    class Meta:
        model = Review
        fields = ["url", "pk", "location", "author", "profile", "title", "content", "image", "created_at", "likes"]

class ReviewCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ["location", "title", "content", "image"]