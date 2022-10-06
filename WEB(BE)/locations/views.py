from rest_framework import viewsets

from locations.models import Location
from locations.serializers import LocationSerializer

class LocationViewSet(viewsets.ReadOnlyModelViewSet):
    permission_classes = []
    
    serializer_class = LocationSerializer
    queryset = Location.objects.all()