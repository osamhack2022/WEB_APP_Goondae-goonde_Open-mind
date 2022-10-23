from django_filters.rest_framework import DjangoFilterBackend

from rest_framework import viewsets, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from accounts.models import Profile

from locations.models import Location, Review, LocationUserStar, Mou, MouUserStar
from locations.serializers import LocationDetailSerializer, LocationListSerializer, ReviewListSerializer, ReviewDetailSerializer, ReviewCreateSerializer, LocationUserStarSerializer, MouUserStarSerializer, MouListSerializer, MouDetailSerializer
from locations.permissions import ReviewPermission

# Location view
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

# Location like
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

# Location star
@api_view(['patch'])
@permission_classes([IsAuthenticated])
def star_location(request, location_id):
    serializer = LocationUserStarSerializer(data=request.data)
    if serializer.is_valid():
        location = get_object_or_404(Location, id=location_id)
        user = request.user

        model = LocationUserStar.objects.filter(location=location, user=user)
        model.delete()

        if serializer.validated_data['rate'] == 0: # 별점이 0이면 삭제
            return Response(status=status.HTTP_200_OK)
        else:
            serializer.save(location=location, user=user)
            return Response({'rate': serializer.validated_data['rate']}, status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)


# Review view
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

# Review like
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

# Mou view
class MouViewSet(viewsets.ReadOnlyModelViewSet):
    permission_classes = []
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['likes']
    queryset = Mou.objects.all()

    def get_serializer_class(self):
        if self.action == 'list':
            return MouListSerializer
        return MouDetailSerializer
    
    def list(self, request):
        mou = Mou.objects.all()
        mou = self.filter_queryset(mou)
        
        page = self.paginate_queryset(mou)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        
        serializer = self.get_serializer(page, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

# Mou like
@api_view(['patch'])
@permission_classes([IsAuthenticated])
def like_mou(request, mou_id):
    mou = get_object_or_404(Mou, id=mou_id)
    if request.user in mou.likes.all():
        mou.likes.remove(request.user)
    else:
        mou.likes.add(request.user)

    serializer = MouDetailSerializer(mou)
    return Response({'total_likes': serializer.data['total_likes']}, status=status.HTTP_200_OK)

# Mou star
@api_view(['patch'])
@permission_classes([IsAuthenticated])
def star_mou(request, mou_id):
    serializer = MouUserStarSerializer(data=request.data)
    if serializer.is_valid():
        mou = get_object_or_404(Mou, id=mou_id)
        user = request.user

        model = MouUserStar.objects.filter(mou=mou, user=user)
        model.delete()

        if serializer.validated_data['rate'] == 0: # 별점이 0이면 삭제
            return Response(status=status.HTTP_200_OK)
        else:
            serializer.save(mou=mou, user=user)
            return Response({'rate': serializer.validated_data['rate']}, status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)