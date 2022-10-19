from django_filters.rest_framework import DjangoFilterBackend
from django.contrib.auth import models

from rest_framework import viewsets, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from accounts.models import Profile

from locations.models import Location, Review
from locations.serializers import LocationSerializer, ReviewSerializer, ReviewCreateSerializer


class LocationViewSet(viewsets.ReadOnlyModelViewSet):
    permission_classes = []
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['category', 'region1', 'region2', 'region3']
    serializer_class = LocationSerializer
    queryset = Location.objects.all()

#class LocationUserStar(APIView)

class ReviewViewSet(viewsets.ModelViewSet):
    permission_classes = [ReviewPermission]
    filter_backends = [DjangoFilterBackend]
    
    def get_queryset(self):
        return Review.objects.filter(location=self.kwargs['location_id'])

    def get_serializer_class(self):
        if self.action == ('list' or 'retrieve'):
            return ReviewSerializer
        return ReviewCreateSerializer
    
    def perform_create(self, serializer):
        self.request.user = models.User.objects.get(id=1)
        location = Location.objects.get(id=self.kwargs['location_id'])
        profile = Profile.objects.get(user=self.request.user)
        serializer.save(location= location, author=self.request.user, profile=profile)
    
        

        
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def like_review(request, review_id):
    review = get_object_or_404(Review, id=review_id)
    if request.user in review.likes.all():
        review.likes.remove(request.user)
    else:
        review.likes.add(request.user)
    
    return Response(status=status.HTTP_200_OK)
        