from django.urls import path
from . import views

urlpatterns = [
    path('storyweave/', views.storyweave, name='storyweave'),
    path('register/', views.register, name='register'),
    path('login/', views.login, name='login'),
]