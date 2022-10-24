from django.urls import path
from rest_framework import routers
from locations import views

router = routers.SimpleRouter()
router.register('location', views.LocationViewSet, basename='location') 
router.register(r'location/(?P<location_id>[^/.]+)/reviews', views.LocationReviewViewSet, basename='location_review')
router.register('mou', views.MouViewSet, basename='mou') 
router.register(r'mou/(?P<mou_id>[^/.]+)/reviews', views.MouReviewViewSet, basename='mou_review')

urlpatterns = [
    path('location/<int:location_id>/like', views.like_location, name='location-like'),
    path('location/<int:location_id>/star', views.star_location, name='location-star'),
    path('location/<int:location_id>/reviews/<int:review_id>/like', views.like_location_review, name='location-review-like'),

    path('mou/<int:mou_id>/like', views.like_mou, name='mou-like'),
    path('mou/<int:mou_id>/star', views.star_mou, name='mou-star'),
    path('mou/<int:mou_id>/reviews/<int:review_id>/like', views.like_mou_review, name='mou-review-like'),
]
urlpatterns += router.urls