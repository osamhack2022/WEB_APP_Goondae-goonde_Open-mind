from rest_framework import serializers

from accounts.serializers import ProfileSerializer

from locations.models import Location, Review, LocationUserStar


class LocationListSerializer(serializers.ModelSerializer):
    total_reviews = serializers.IntegerField(source='review.count', read_only=True)
    total_likes = serializers.IntegerField(source='likes.count', read_only=True)
    user_liked = serializers.SerializerMethodField('get_user_liked_toggle')
    
    class Meta:
        model = Location
        fields = ["id", "name", "category", "address", "number", "benefit", "total_reviews", "user_liked", "total_likes"]
    
    def get_user_liked_toggle(self, obj):
        request =  self.context.get('request', None)
        if request:
            if request.user in obj.likes.all():
                return True
        return False

class LocationDetailSerializer(serializers.ModelSerializer):
    total_reviews = serializers.IntegerField(source='review.count', read_only=True)
    review = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    
    total_likes = serializers.IntegerField(source='likes.count', read_only=True)
    user_liked = serializers.SerializerMethodField('get_user_liked_toggle')
    
    class Meta:
        model = Location
        fields = ["id", "name", "category", "address", "region1", "region2", "region3", "x", "y", "number", "benefit", "total_reviews", "review", "user_liked", "total_likes", "likes"]
    
    def get_user_liked_toggle(self, obj):
        request =  self.context.get('request', None)
        if request:
            if request.user in obj.likes.all():
                return True
        return False
        
class LocationUserStarSerializer(serializers.ModelSerializer):
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
