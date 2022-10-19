from cgitb import lookup
from typing_extensions import Required
from rest_framework import serializers

from accounts.serializers import ProfileSerializer

from locations.models import Location, Review, LocationUserStar

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = '__all__'
    
class LocationUserStar(serializers.ModelSerializer):
    class Meta:
        model = LocationUserStar
        fields = '__all__'


class ReviewSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(read_only=True)

    class Meta:
        model = Review
        fields = '__all__'

class ReviewCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ["content", "image"]
