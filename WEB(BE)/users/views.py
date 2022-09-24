from django.contrib.auth.models import User
from rest_framework import generics, status
from rest_framework.response import Response
from .serializers import RegisterSerializer, LoginSerializer, ProfileSerializer
from .models import Profile

class RegisterView(generics.CreateAPIView): #CreateAPIView(generics)사용 구현
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer
    
    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        token =serializer.validated_data #validate()의 리턴값인 Token을 받아옴
        return Response({"token": token.key}, status=status.HTTP_200_OK)

class Profileview(generics.RetrieveUpdateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer