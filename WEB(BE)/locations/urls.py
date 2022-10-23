from django.urls import path
from rest_framework import routers
from locations import views

router = routers.SimpleRouter()
router.register('', views.LocationViewSet, basename='location') 
router.register(r'(?P<location_id>[^/.]+)/reviews', views.ReviewViewSet, basename='review')
router.register('mou', views.MouViewSet, basename='mou') 

urlpatterns = [
    path('<int:location_id>/like', views.like_location, name='location-like'),
    path('<int:location_id>/star', views.star_location, name='location-star'),
    path('<int:location_id>/reviews/<int:review_id>/like', views.like_review, name='review-like'),

    path('mou/<int:mou_id>/like', views.like_mou, name='mou-like'),
    path('mou/<int:mou_id>/star', views.star_mou, name='mou-star'),
]
urlpatterns += router.urls