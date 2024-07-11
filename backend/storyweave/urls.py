# myapp/urls.py

from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import RegisterView, StoryListCreateView, SegmentListCreateView, VoteListCreateView, CommentListCreateView, ProfileListCreateView, CustomTokenObtainPairView, getProfile

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('stories/', StoryListCreateView.as_view(), name='stories'),
    path('segments/', SegmentListCreateView.as_view(), name='segments'),
    path('votes/', VoteListCreateView.as_view(), name='votes'),
    path('comments/', CommentListCreateView.as_view(), name='comments'),
    path('profiles/', ProfileListCreateView.as_view(), name='profiles'),
    path('profile/', getProfile, name='profile'),
]
