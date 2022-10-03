from django.shortcuts import render

from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response

from locations.models import Location
from locations.serializers import LocationSerializer

class LocationList(APIView):
    authentication_classes = []
    permission_classes = []
    def get(self, request, format=None):
        locations = Location.objects.all()
        serializer = LocationSerializer(locations, many=True)
        return Response(serializer.data)