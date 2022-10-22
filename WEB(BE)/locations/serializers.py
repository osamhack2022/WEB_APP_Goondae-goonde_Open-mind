from django.db.models import Avg

from rest_framework import serializers

from accounts.serializers import ProfileSerializer

from locations.models import Location, Review, LocationUserStar

# location_star
class LocationUserStarSerializer(serializers.ModelSerializer):
    class Meta:
        model = LocationUserStar
        fields = ['rate', 'user']
        read_only_fields = ['user']


# location_review
class ReviewListSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(read_only=True)
    total_likes = serializers.IntegerField(source='likes.count', read_only=True)
    user_liked = serializers.SerializerMethodField('get_user_liked_toggle')

    class Meta:
        model = Review
        fields = ["id", "location", "author", "profile", "content", "image", "created_at", "user_liked", "total_likes"]
    
    def get_user_liked_toggle(self, obj):
        request =  self.context.get('request', None)
        if request:
            if request.user.is_authenticated:
                if request.user in obj.likes.all():
                    return True
        return False

# location
class LocationListSerializer(serializers.ModelSerializer):
    total_reviews = serializers.IntegerField(source='review.count', read_only=True)
    total_likes = serializers.IntegerField(source='likes.count', read_only=True)
    user_liked = serializers.SerializerMethodField('get_user_liked_toggle')

    total_stars = serializers.SerializerMethodField('get_total_stars')
    user_star_rated = serializers.SerializerMethodField('get_user_star_rated_toggle')
    
    class Meta:
        model = Location
        fields = ["id", "name", "category", "address", "number", "benefit", "total_reviews", "user_liked", "total_likes", "user_star_rated", "total_stars"]
    
    def get_user_liked_toggle(self, obj):
        request =  self.context.get('request', None)
        if request:
            if request.user.is_authenticated:
                if request.user in obj.likes.all():
                    return True
        return False
    
    def get_user_star_rated_toggle(self, obj): # 평가가 없다면 false, 있다면 평가 점수를 
        request =  self.context.get('request', None)
        if request:
            if request.user.is_authenticated:
                if obj.star.filter(user=request.user):
                    return obj.star.get(user=request.user).rate
        return False
    
    def get_total_stars(self, obj):
        star_avg = obj.star.all().aggregate(Avg('rate'))["rate__avg"]
        return star_avg if star_avg != None else 0 # 평가가 없으면 0을 표시

class LocationDetailSerializer(serializers.ModelSerializer):
    total_reviews = serializers.IntegerField(source='review.count', read_only=True)
    review = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    
    total_likes = serializers.IntegerField(source='likes.count', read_only=True)
    user_liked = serializers.SerializerMethodField('get_user_liked_toggle')

    total_stars = serializers.SerializerMethodField('get_total_stars')
    count_stars = serializers.SerializerMethodField('get_count_stars')
    star = LocationUserStarSerializer(many=True, read_only=True)
    user_star_rated = serializers.SerializerMethodField('get_user_star_rated_toggle')
 
    
    class Meta:
        model = Location
        fields = ["id", "name", "category", "address", "region1", "region2", "region3", "x", "y", "number", "benefit", "total_reviews", "review", "user_liked", "total_likes", "likes", "user_star_rated", "total_stars", "count_stars", "star"]
    
    def get_user_liked_toggle(self, obj):
        request =  self.context.get('request', None)
        if request:
            if request.user.is_authenticated:
                if request.user in obj.likes.all():
                    return True
        return False
    
 
    def get_user_star_rated_toggle(self, obj):
        request =  self.context.get('request', None)
        if request:
            if request.user.is_authenticated:
                if obj.star.filter(user=request.user):
                    return obj.star.get(user=request.user).rate
        return False
    
    def get_total_stars(self, obj):
        star_avg = obj.star.all().aggregate(Avg('rate'))["rate__avg"]
        return star_avg if star_avg != None else 0 # 평가가 없으면 0을 표시
    
    def get_count_stars(self, obj):
        return obj.star.count()




class ReviewDetailSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(read_only=True)
    total_likes = serializers.IntegerField(source='likes.count', read_only=True)
    user_liked = serializers.SerializerMethodField('get_user_liked_toggle')

    class Meta:
        model = Review
        fields = '__all__'
    
    def get_user_liked_toggle(self, obj):
        request =  self.context.get('request', None)
        if request:
            if request.user.is_authenticated:
                if request.user in obj.likes.all():
                    return True
        return False

class ReviewCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ["content", "image"]
