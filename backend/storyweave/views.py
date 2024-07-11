# myapp/views.py

from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Story, Segment, Vote, Comment, Profile
from .serializers import UserSerializer, StorySerializer, SegmentSerializer, VoteSerializer, CommentSerializer, ProfileSerializer, CustomTokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from django.http import HttpResponse, JsonResponse






class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        email = request.data.get('email')
        if not username or not password or not email:
            return Response({'error': 'All fields are required'}, status=400)
        try:
            user = User.objects.create_user(username=username, password=password, email=email)
            profile = Profile.objects.create(user=user)
            user.save()
            profile.save()
            return Response({'message': 'User created successfully'}, status=201)
        except Exception as e:
            return Response({'error': str(e)}, status=500)
        


def getProfile(request):
    token = request.META.get('HTTP_AUTHORIZATION').split(' ')[1]
    print(token)
    jwt = JWTAuthentication()
    user, validated_token = jwt.authenticate(request)
    print(user)
    profile = Profile.objects.get(user=user)
    print(profile)
    return JsonResponse({'username': user.username, 'email': user.email, "user_id": user.id, "token": token, "profile": profile.bio})
    




class StoryListCreateView(generics.ListCreateAPIView):
    queryset = Story.objects.all()
    serializer_class = StorySerializer

class SegmentListCreateView(generics.ListCreateAPIView):
    queryset = Segment.objects.all()
    serializer_class = SegmentSerializer

class VoteListCreateView(generics.ListCreateAPIView):
    queryset = Vote.objects.all()
    serializer_class = VoteSerializer

class CommentListCreateView(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class ProfileListCreateView(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
