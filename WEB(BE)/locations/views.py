from django_filters.rest_framework import DjangoFilterBackend
from django.db.models import Exists, OuterRef

from rest_framework import viewsets, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from accounts.models import Profile

from locations.models import Location, Review
from locations.serializers import LocationDetailSerializer, LocationListSerializer, ReviewListSerializer, ReviewDetailSerializer, ReviewCreateSerializer
from locations.permissions import ReviewPermission


class LocationViewSet(viewsets.ReadOnlyModelViewSet):
    permission_classes = []
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['category', 'region1', 'region2', 'region3', 'likes']
    queryset = Location.objects.all()

    def get_serializer_class(self):
        if self.action == 'list':
            return LocationListSerializer
        return LocationDetailSerializer
    
    def list(self, request):
        location = Location.objects.all()
        location = self.filter_queryset(location)
        
        page = self.paginate_queryset(location)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        
        serializer = self.get_serializer(page, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
@api_view(['patch'])
@permission_classes([IsAuthenticated])
def like_location(request, location_id):
    location = get_object_or_404(Location, id=location_id)
    if request.user in location.likes.all():
        location.likes.remove(request.user)
    else:
        location.likes.add(request.user)

    serializer = LocationDetailSerializer(location)
    return Response({'total_likes': serializer.data['total_likes']}, status=status.HTTP_200_OK)


class ReviewViewSet(viewsets.ModelViewSet):
    permission_classes = [ReviewPermission]
    filter_backends = [DjangoFilterBackend]
    pagination_class = None
    
    def get_queryset(self):
        query_set = Review.objects.filter(location=self.kwargs['location_id'])
        return query_set.order_by('-created_at')

    def get_serializer_class(self):
        if self.action == 'list':
            return ReviewListSerializer
        if self.action == 'retrieve':
            return ReviewDetailSerializer
        return ReviewCreateSerializer
    
    def perform_create(self, serializer):
        location = Location.objects.get(id=self.kwargs['location_id'])
        profile = Profile.objects.get(user=self.request.user)
        serializer.save(location=location, author=self.request.user, profile=profile)
    
@api_view(['patch'])
@permission_classes([IsAuthenticated])
def like_review(request, location_id, review_id):
    review = get_object_or_404(Review, id=review_id)
    if request.user in review.likes.all():
        review.likes.remove(request.user)
    else:
        review.likes.add(request.user)

    serializer = ReviewDetailSerializer(review)
    return Response({'total_likes': serializer.data['total_likes']}, status=status.HTTP_200_OK)

# @api_view(['patch'])
# @permission_classes([IsAuthenticated])
# def star_location(request, location_id):
#     location = get_object_or_404(Location, id=location_id)
#     if request.user in location.likes.all():
#         location.likes.remove(request.user)
#     else:
#         location.likes.add(request.user)

#     serializer = LocationDetailSerializer(location)
#     return Response({'total_likes': serializer.data['total_likes']}, status=status.HTTP_200_OK)
        