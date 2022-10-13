from django_filters.rest_framework import DjangoFilterBackend

from rest_framework import viewsets, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from accounts.models import Profile

from locations.models import Location, Review
from locations.serializers import LocationSerializer, ReviewSerializer, ReviewCreateSerializer
from locations.permissions import ReviewPermission


class LocationViewSet(viewsets.ReadOnlyModelViewSet):
    permission_classes = []
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['category']
    
    serializer_class = LocationSerializer
    queryset = Location.objects.all()


class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    permission_classes = [ReviewPermission]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['location']
    
    def get_serializer_class(self):
        if self.action == 'list' or 'retrieve':
            return ReviewSerializer
        return ReviewCreateSerializer
    
    def perform_create(self, serializer):
        location = Location.objects.get(name=self.request.data['location_name'])
        profile = Profile.objects.get(user=self.request.user)
        serializer.save(location=location, author=self.request.user, profile=profile)
        
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def like_review(request, pk):
    review = get_object_or_404(Review, pk=pk)
    if request.user in review.likes.all():
        review.likes.removew(request.user)
    else:
        review.likes.add(request.user)
    
    return Response(status=status.HTTP_200_OK)
        