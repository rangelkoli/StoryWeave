from django.urls import path
from . import views

urlpatterns = [
    path('storyweave/', views.storyweave, name='storyweave'),
]