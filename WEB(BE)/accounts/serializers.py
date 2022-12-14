from rest_framework import serializers
from allauth.account.adapter import get_adapter
from rest_framework_jwt.settings import api_settings
from django.contrib.auth import get_user_model
from django.contrib.auth.models import update_last_login
from django.contrib.auth import authenticate
from rest_auth.registration.serializers import RegisterSerializer

from .models import *

from .validators import CustomASCIIUsernameValidator

# JWT 사용을 위한 설정
JWT_PAYLOAD_HANDLER = api_settings.JWT_PAYLOAD_HANDLER
JWT_ENCODE_HANDLER = api_settings.JWT_ENCODE_HANDLER

# 기본 유저 모델 불러오기
User = get_user_model()

# 회원가입
class CustomRegisterSerializer(RegisterSerializer):
    username = serializers.CharField(required=True, min_length=6, max_length=15, validators=[CustomASCIIUsernameValidator()])
    
    '''def get_cleaned_data(self):
        data_dict = super().get_cleaned_data() # username, password, email이 디폴트
        data_dict['nickname'] = self.validated_data.get('nickname', '')

        return data_dict'''

# 로그인 
class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=30)
    password = serializers.CharField(max_length=128, write_only=True)
    token = serializers.CharField(max_length=255, read_only=True)
    
    def validate(self, data):
        username = data.get("username")
        password = data.get("password", None)
        user = authenticate(username=username, password=password)

        if user is None:
            return {'username': 'None'}
        try:
            payload = JWT_PAYLOAD_HANDLER(user)
            jwt_token = JWT_ENCODE_HANDLER(payload)
            update_last_login(None, user)

        except User.DoesNotExist:
            raise serializers.ValidationError(
                'User with given username and password does not exist'
            )
        return {
            'username': user.username,
            'token': jwt_token
        }
        

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('profile_image', 'username')
    username = serializers.SerializerMethodField("get_user_username")
    def get_user_username(self, obj):
        return obj.user.username