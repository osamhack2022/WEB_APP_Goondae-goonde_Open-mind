from rest_framework.routers import DefaultRouter

from locations import views

router = DefaultRouter()
router.register(r'', views.LocationViewSet, basename='location')

urlpatterns = []
urlpatterns += router.urls