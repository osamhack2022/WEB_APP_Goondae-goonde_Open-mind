from django.urls import path
from rest_framework import routers
from locations import views

router = routers.SimpleRouter()
router.register('reviews', views.ReviewViewSet)
router.register('', views.LocationViewSet)

urlpatterns = [
    path('reviews/like/<int:pk>', views.like_review, name='like_review')
]
urlpatterns += router.urls