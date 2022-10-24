from django_filters.rest_framework import DjangoFilterBackend

from rest_framework import viewsets, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from accounts.models import Profile

from locations.models import Location, LocationReview, LocationUserStar, Mou, MouReview, MouUserStar, Tmo
from locations.serializers import LocationDetailSerializer, LocationListSerializer, LocationReviewListSerializer, LocationReviewDetailSerializer, LocationReviewCreateSerializer,  LocationUserStarSerializer, MouListSerializer, MouDetailSerializer, MouUserStarSerializer, MouReviewListSerializer, MouReviewDetailSerializer, MouReviewCreateSerializer, TmoListSerializer
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


# LocationReview view
class LocationReviewViewSet(viewsets.ModelViewSet):
    permission_classes = [ReviewPermission]
    filter_backends = [DjangoFilterBackend]
    pagination_class = None
    
    def get_queryset(self):
        query_set = LocationReview.objects.filter(location=self.kwargs['location_id'])
        return query_set.order_by('-created_at')

    def get_serializer_class(self):
        if self.action == 'list':
            return LocationReviewListSerializer
        if self.action == 'retrieve':
            return LocationReviewDetailSerializer
        return LocationReviewCreateSerializer
    
    def perform_create(self, serializer):
        location = Location.objects.get(id=self.kwargs['location_id'])
        profile = Profile.objects.get(user=self.request.user)
        serializer.save(location=location, author=self.request.user, profile=profile)

# LocationReview like
@api_view(['patch'])
@permission_classes([IsAuthenticated])
def like_location_review(request, location_id, review_id):
    review = get_object_or_404(LocationReview, id=review_id)
    if request.user in review.likes.all():
        review.likes.remove(request.user)
    else:
        review.likes.add(request.user)

    serializer = LocationReviewDetailSerializer(review)
    return Response({'total_likes': serializer.data['total_likes']}, status=status.HTTP_200_OK)

# Mou view
class MouViewSet(viewsets.ReadOnlyModelViewSet):
    permission_classes = []
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['region','likes']
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

# MouReview view
class MouReviewViewSet(viewsets.ModelViewSet):
    permission_classes = [ReviewPermission]
    filter_backends = [DjangoFilterBackend]
    pagination_class = None
    
    def get_queryset(self):
        query_set = MouReview.objects.filter(mou=self.kwargs['mou_id'])
        return query_set.order_by('-created_at')

    def get_serializer_class(self):
        if self.action == 'list':
            return MouReviewListSerializer
        if self.action == 'retrieve':
            return MouReviewDetailSerializer
        return MouReviewCreateSerializer
    
    def perform_create(self, serializer):
        mou = Mou.objects.get(id=self.kwargs['mou_id'])
        profile = Profile.objects.get(user=self.request.user)
        serializer.save(mou=mou, author=self.request.user, profile=profile)

# MouReview like
@api_view(['patch'])
@permission_classes([IsAuthenticated])
def like_mou_review(request, mou_id, review_id):
    review = get_object_or_404(MouReview, id=review_id)
    if request.user in review.likes.all():
        review.likes.remove(request.user)
    else:
        review.likes.add(request.user)

    serializer = MouReviewDetailSerializer(review)
    return Response({'total_likes': serializer.data['total_likes']}, status=status.HTTP_200_OK)

# Tmo view
class TmoViewSet(viewsets.ReadOnlyModelViewSet):
    permission_classes = []
    queryset = Tmo.objects.all()

    def get_serializer_class(self):
        if self.action == 'list':
            return TmoListSerializer
        #return TmoDetailSerializer
    
    def list(self, request):
        tmo = Tmo.objects.all()
        tmo = self.filter_queryset(tmo)
        
        page = self.paginate_queryset(tmo)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        
        serializer = self.get_serializer(page, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
